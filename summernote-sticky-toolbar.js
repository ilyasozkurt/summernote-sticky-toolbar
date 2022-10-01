/**
 * Summernote Sticky Toolbar
 *
 * This is a plugin for Summernote (www.summernote.org) WYSIWYG editor.
 * It will keep the toolbar sticky to the top of the screen as you scroll.
 *
 * @author İlyas Özkurt <ilyasozkurt@gmail.com>
 *
 */

(function (factory) {
    /* Global define */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {

    $.extend($.summernote.options, {
        enabled: false,
        offset: 0,
        zIndex: 9999
    })

    $.extend($.summernote.plugins, {
        /**
         *  @param {Object} context - context object has status of editor.
         */
        'stickyToolbar': function (context) {
            let $editor = context.layoutInfo.editor,
                $toolbar = context.layoutInfo.toolbar,
                options = context.options.stickyToolbar;

            this.initialize = function () {

                if (options.enabled) {

                    $(window).scroll(this.repositionToolbar);

                    this.repositionToolbar();

                }

            };

            this.repositionToolbar = function () {

                var windowTop = $(window).scrollTop() + options.offset,
                    editorTop = $editor.offset().top,
                    editorBottom = editorTop + $editor.height();

                if (
                    windowTop > editorTop &&
                    windowTop < editorBottom
                ) {
                    $toolbar
                        .css({
                            'position': 'fixed',
                            'top': options.offset,
                            'width': $editor.width() + 'px',
                            'z-index': options.zIndex,
                        });
                } else {
                    $toolbar
                        .css({
                            'position': 'static',
                        });
                }
            }

        }
    });

}));