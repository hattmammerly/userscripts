// ==UserScript==
// @name        I hate my friends
// @description for those of us who hate our friends
// @namespace http://github.com/sirspazzolot/userscripts/
// @include *.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js
// @version .2
// ==/UserScript==
// based on http://userscripts.org/scripts/show/150411

function sleep(rem){ //rem for removed entries
    setInterval(function() {
        popup(rem);
    }, 1000);
}

function popup(rem) {
    $('div.dialog_body').html(rem + ' removed.');
}

var page = "";
//button placement:
if ($("#pagelet_friends").length > 0) {
    $('.uiToolbarContent .rfloat').prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"_11b uiButton uiToolbarButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Delete Selected Friends\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "friends";
} else if ($("#pagelet_like_stream").length > 0) {
    $('.fbTimelineSection.mtm.timelineLikeStream').find('.clearfix.uiHeaderTop').prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"profileEditButton uiButton uiButtonOverlay\"><input type=\"submit\" id=\"mass_deleter\" value=\"Delete Selected Pages\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "likes";
} else if ($(location).attr("href") == "https://www.facebook.com/bookmarks/groups" || $(location).attr("href") === "http://www.facebook.com/bookmarks/groups") {
    $(".clearfix .uiHeaderTop").prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"uiHeaderActions uiButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Leave Selected Groups\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "groups";
}

set_timer();

$("#mass_deleter").live("click", function() {
    var i = 0;
    $('.marked:checkbox:checked').each(function() {
        i = i + 1;
        var profileid = $(this).attr('id');
        var a = document.createElement('script');
        if (page === "friends") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/profile/removefriend.php').setData({ uid: " + profileid + ",norefresh:true }).send();";
        } else if (page === "likes") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData({ fbpage_id: " + profileid + ",add:false,norefresh:true }).send();"; //figure out what parameters this script needs and how to get them
        } else if (page === "groups") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/bookmark/groups/leave/').setData({ group_id: " + profileid + ", autocomplete:true }).send();";
            //a.innerHTML = "new AsyncRequest().setURI('/ajax/groups/membership/leave.php').setData({ group_id: " + profileid + ",norefresh:true }).send();"; 
        }
        document.body.appendChild(a);
    });
    if (i === 0) {
        alert('Select at least one entry to remove.\nContact me if it\'s broken');
    }
    sleep(i);
});

function set_timer() {
    set_checkboxes();
    t = setTimeout(function() {
    set_timer()
    }, 1000);
}

function set_checkboxes() {
    if (page === "friends") {
        friends_checkboxes();
    } else if (page === "likes") {
         likes_checkboxes();
    } else if (page === "groups") {
        groups_checkboxes();
    }
}

function friends_checkboxes() {
    var search = false;
    $('li.fbProfileBrowserListItem.uiListItem').each(function(index) {
    search = true;
    });
    if (search) {
        $('div.fbProfileBrowserList ul li.fbProfileBrowserListItem.uiListItem').each(function(index) {
            var id = $(this).find('div.fsl a').attr('data-hovercard'); //hovercard attribute is a url ending with friend's id
            if (!id) {
                id = $(this).find('div.fsl a').attr('ajaxify'); 
            }
            if (!id) {
                id = '1';
            }
            var profileid = parseInt(/(\d+)/.exec(id)[1], 10); //extract bare id number from attribute
            if (!$(this).find('input').hasClass('marked')) {
                $(this).find('input').prepend('<input type="checkbox" class="marked" id="' + profileid + '">');
             }
        }); //all of that was search page code so we get to do that again for the main friends page
    } else {
        $('div.fsl').each(function(index) {
            if ($(this).hasClass('fwb')) {
                var id = $(this).find('a').attr('data-hovercard');
                if (!id) {
                    id = $(this).find('a').attr('ajaxify');
                }
                if (!id) {
                    id = '1';
                }
                var profileid = parseInt(/(\d+)/.exec(id)[1], 10);
                if (!$(this).children().hasClass('marked')) {
                    $(this).prepend('<input type="checkbox" class="marked" id="' + profileid + '">');
                }
            }
        });
    }
}

function likes_checkboxes() {
    $('li.mbs.uiFavoritesStory').each(function(index) {
        var id = $(this).find('div.nameText').children('a').attr('data-hovercard');
        if (!id) {
            id = $(this).find('td.vTop.prm.fbStreamTimelineFavInfoContainer').attr('data-hovercard');
        }
        if (!id) {
            id = '1';
        }
        var profileid = parseInt(/(\d+)/.exec(id)[1], 10);
        if (!$(this).find('div.nameText').children().hasClass('marked')) {
            $(this).find('div.nameText').prepend('<input type="checkbox" class="marked" id="' + profileid + '">');
        }
    });
}//*/

function groups_checkboxes(i) {
    $('#pagelet_bookmark_seeall').find('li.seeAllItem.clearfix').each(function() {
        var id = $(this).children('a[id^="privacy_icon_group"]').attr('data-hovercard');
        if (!id) {
            id = $(this).find('li.uiMenuItem[data-label="Leave Group"]').children('a.itemAnchor').attr("href");
        }
        if (!id) {
            id = 1;
        }
        var profileid = parseInt(/(\d+)/.exec(id)[1], 10);
        if (!$(this).children().hasClass('marked')) {
            $(this).prepend('<input type="checkbox" class="marked lfloat" id="' + profileid + '">');
        }
    });
}//*/
/*
function confirm_dialog() {
    $(this).find('input[name="prevent_readd"]').attr('checked', 0); //don't prevent others from re-adding
}//*/
