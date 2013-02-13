for (;;); {
    "__ar": 1,
    "payload": null,
    "jsmods": {
        "instances": [
            ["m_7_0", ["DialogX", "LayerFadeOnHide", "LayerDestroyOnHide", "LayerRemoveOnHide", "LayerHideOnEscape", "LayerHideOnTransition", "DialogHideOnSuccess", "m_7_1"],
                [{
                    "width": 465,
                    "modal": true,
                    "autohide": null,
                    "titleID": "u_7_0",
                    "addedBehaviors": [{
                        "__m": "LayerFadeOnHide"
                    }, {
                        "__m": "LayerDestroyOnHide"
                    }, {
                        "__m": "LayerRemoveOnHide"
                    }, {
                        "__m": "LayerHideOnEscape"
                    }, {
                        "__m": "LayerHideOnTransition"
                    }, {
                        "__m": "DialogHideOnSuccess"
                    }],
                    "classNames": ["confirm_dialog"]
                }, {
                    "__m": "m_7_1"
                }], 3]
        ],
        "markup": [
            ["m_7_1", {
                "__html": "<form rel=\"async\" class=\"_s\" action=\"\/ajax\/groups\/membership\/leave.php?group_id=222411767841752\" method=\"post\" onsubmit=\"return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)\" id=\"u_7_3\"><input type=\"hidden\" name=\"fb_dtsg\" value=\"AQBuG2uk\" autocomplete=\"off\" \/><div class=\"pvs phm _1yw\" id=\"u_7_0\">Leave RS For Nerds<\/div><div class=\"pam _13\">Are you sure you want to leave this group?<br \/><br \/><div class=\"uiInputLabel clearfix\"><input type=\"checkbox\" name=\"prevent_readd\" checked=\"1\" class=\"uiInputLabelCheckbox\" id=\"u_7_1\" \/><label for=\"u_7_1\">Prevent other members of this group from re-adding you.<\/label><\/div><\/div><div class=\"_14\"><div class=\"pam uiOverlayFooter uiBoxGray topborder\"><table class=\"uiGrid\" cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td class=\"prs uiOverlayFooterMessage\"><a href=\"\/ajax\/report.php?content_type=1&amp;cid=222411767841752\" rel=\"dialog\" role=\"button\">Report Group<\/a><\/td><td class=\"uiOverlayFooterButtons\"><label class=\"layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge\" for=\"u_7_2\"><input value=\"Leave Group\" name=\"confirmed\" type=\"submit\" id=\"u_7_2\" \/><\/label><a class=\"layerCancel uiOverlayButton uiButton uiButtonLarge\" href=\"#\" role=\"button\"><span class=\"uiButtonText\">Cancel<\/span><\/a><\/td><\/tr><\/tbody><\/table><\/div><\/div><\/form>"
            },
            3]
        ],
        "elements": [
            ["m_7_2", "u_7_3", 2, "m_7_1"]
        ],
        "require": [
            ["m_7_0"],
            ["Layer", "show", ["m_7_0"],
                [{
                    "__m": "m_7_0"
                }]
            ]
        ]
    },
    "css": ["kDEnf"],
    "js": ["5P6en", "UyWq1"],
    "bootloadable": {
        "React": {
            "resources": ["aJ5ol", "UyWq1"],
            "module": true
        },
        "IframeShim": {
            "resources": ["UyWq1", "5P6en", "MqSmz"],
            "module": true
        },
        "AsyncDOM": {
            "resources": ["UyWq1", "bEufR"],
            "module": true
        },
        "ConfirmationDialog": {
            "resources": ["UyWq1", "5P6en", "oE4Do"],
            "module": true
        },
        "Dialog": {
            "resources": ["UyWq1", "5P6en", "kDEnf"],
            "module": true
        }
    },
    "resource_map": {
        "kDEnf": {
            "type": "css",
            "permanent": 1,
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yU\/r\/IzVZ4cXA1zO.css"
        },
        "5P6en": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yg\/r\/Rd6ly8z5yJa.js"
        },
        "UyWq1": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/y7\/r\/ccqthSI8O0E.js"
        },
        "aJ5ol": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yz\/r\/LqLAKiePs9I.js"
        },
        "MqSmz": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yH\/r\/ghlEJgSKAee.js"
        },
        "bEufR": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yU\/r\/Ph_PwC0IBpl.js"
        },
        "oE4Do": {
            "type": "js",
            "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yD\/r\/65c9OW-i481.js"
        }
    }
}
