/*!
 * jQuery UI Plugin SplitButton
 * https://github.com/stephen-james/jquery.splitbutton 
 *
 * Author : Stephen James, 2012
 * Intention : Provide re-usable plugin encapsulating snippet for creating splitbuttons using jQuery UI
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

(function ($, undefined) {

    $.widget("ui.splitbutton", {
        version: "1.0.0",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true
        },

        _create: function () {

            var parentDiv = this.element
                .find("button")
                .first()
                .button()
                .parent()

            $("<button>Option Selector</button>")
                .appendTo(parentDiv)
                .button({
                    text: false,
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    }
                })
                .click(function () {
                    var menu = $(this).parent().next().show().position({
                        my: "left top",
                        at: "left bottom",
                        of: this
                    });
                    $(document).one("click", function () {
                        menu.hide();
                    });
                    return false;
                })
                .parent()
                    .buttonset()
                    .next()
                        .hide()
                        .menu();
        }
    });

} (jQuery));