// ==UserScript==
// @name        I hate my friends
// @description for those of us who hate our friends
// @namespace http://hattmammerly.com/codez/
// @include *.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js
// @version .2
// ==/UserScript==
// based on http://userscripts.org/scripts/show/150411

function sleep(rem){ //rem for removed entries
    setInterval(function() {
        popup(rem)
    }, 1000);
}

function popup(rem) {
    $('div.dialog_body').html(rem + ' removed.');
}
set_timer();

var page = "";
if ($("#pagelet_friends").length > 0) {
    $('.uiToolbarContent .rfloat').prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"_11b uiButton uiToolbarButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Delete Selected Friends\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "friends";
} else if ($("#pagelet_like_stream").length > 0) {
    $('.clearfix .uiHeaderTop').prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"_11b uiButton uiToolbarButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Delete Selected Pages\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "likes";
} else if ($(location).attr("href") === "https://www.facebook.com/bookmarks/groups" || $(location).attr("href") === "http://www.facebook.com/bookmarks/groups") {
    $(".clearfix .uiHeaderTop").prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"_11b uiButton uiToolbarButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Leave Selected Groups\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "groupslist"; 

} else if ($("#pagelet_group_members").length > 0) {
    $('.uiList .rfloat').prepend("<div id=\"delete_buttons\" style=\"float:right;margin-left:5px;\"></label><label for=\"Ihavenofriends\" class=\"_11b uiButton uiToolbarButton\"><input type=\"submit\" id=\"mass_deleter\" value=\"Expel Selected Members\"></label></div>");
    $('.stickyHeaderWrap .back').css('height', '60px');
    $('.fbTimelineSection.mtm').css('margin-top', '10px');
    page = "groupsmem";
}

$("#mass_deleter").live("click", function() { //redo function when I get checkboxes everywhere else
    var i = 0;
    $('.marked:checkbox:checked').each(function() {
        i = i + 1;
        var profileid = $(this).attr('id');
        var a = document.createElement('script');
        if (pages === "friends") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/profile/removefriend.php').setData({ uid: " + profileid + ",norefresh:true }).send();";
        } else if (pages === "likes") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData({ fbpage_id: " + profileid + ",add:false,norefresh:true }).send();"; //figure out what parameters this script needs and how to get them
        } else if (pages === "groupslist") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/groups/membership/leave.php').setData({ group_id: " + profileid + ",norefresh:true }).send();"; 
        } else if (pages === "groupsmem") {
            a.innerHTML = "new AsyncRequest().setURI('/ajax/groups/members/remove.php').setData({ group_id: " + groupid + ",uid: " + profileid + ",norefresh:true }).send();"; //may not work. get both groupid and profileid
        }
        document.body.appendChild(a);
    });
    if (i === 0) {
        alert('Select at least one entry to remove.\nContact me if it\'s broken');
    }
    sleep(i);
});

function set_timer() {
    set_checkboxes(0);
    t = setTimeout(function() {
    set_timer()
    }, 1000);
}
function set_checkboxes(i) {
    var search = false; //figure out how to differentiate between pages page and this page. shouldn't be hard
    $('li.fbProfileBrowserListItem.uiListItem').each(function(index) {
        search = true;
        //alert
    });
    if (search) {
        $('div.fbProfileBrowserList ul li.fbProfileBrowserListItem.uiListItem').each(function(index) {
            var id = $(this).find('div.fsl a').attr('data-hovercard'); //hovercard attribute is a url ending with friend's id
            if (!id) {
                id = $(this).find('div.fsl a').attr('ajaxify'); //mutual friends dialog or whatever, also contains id
            }
            if (!id) {
                id = '1';
            }
            var profileid = parseInt(/(\d+)/.exec(id)[1], 10); //discard all but the base10 int in id
            if (i == '0') {
                if (!$(this).find('input').hasClass('marked')) {
                    $(this).find('input').prepend('<input type="checkbox" class="marked" id="' + profileid + '">');
                }
            } else { //check every box
                if (!$(this).find('input').hasClass('marked')) {
                    $(this).find('input').remove();
                    $(this).find('div.fsl').prepend('<input type="checkbox" checked="checked" class="marked" id="' + profileid + '">');
                 } else {
                    $(this).find('input').prop('checked', true);
                }
            }
        }); //all of that was search page code so we get to do that again
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
                if (i == '0') {
                    if (!$(this).children().hasClass('marked')) {
                        $(this).prepend('<input type="checkbox" class="marked" id="' + profileid + '">');
                    }
                } else { //check every box
                    if (!$(this).children().hasClass('marked')) {
                        $(this).find('input').remove();
                        $(this).prepent('<input type="checkbox" checked="checked" class="marked" id="' + profileid + '">');
                    } else {
                        $(this).find(input).prop('checked', true);
                    }
                }
            }
        });
    }
}
