/**
 * @fileOverview relocator.js
 * @version 1.0.3
 *
 * @author overtrue <anzhengchao@gmail.com>
 * @see    https://github.com/overtrue
 * @see    https://github.com/overtrue/relocator.js
 *
 * Copyright (c) 2014 overtrue <anzhengchao@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * See (http://jquery.com/).
 * @name relocator
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */
; (function(factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
} (function($) {
    $.fn.relocate = function(boxSelector) {
        this.each(function() {
            var img = $(this);
            var box = boxSelector ? img.closest(boxSelector) : img.parent();
            var tmpImg = new Image();

            box.css({
                'position': 'relative',
                'overflow': 'hidden',
                'max-width': 'auto'
            });

            tmpImg.src = img.attr('src');

            $(tmpImg).load(function() {
                var tmp           = $(this).get(0);
                var imgRealWidth  = tmp.naturalWidth;
                var imgRealHeight = tmp.naturalHeight;
                var boxWidth      = parseInt(box.css('width'));
                var boxHeight     = parseInt(box.css('height'));
                var imgRatio      = imgRealWidth / imgRealHeight;

                if (imgRealWidth / imgRealHeight < boxWidth / boxHeight) {
                    var topDistance = ((boxWidth / imgRealWidth) * imgRealHeight - boxHeight) / 2;

                    img.css({
                        'width'     : boxWidth,
                        'height'    : 'auto',
                        'max-height': 'none',
                        'margin-top': -topDistance
                    });
                } else {
                    var leftDistance = ((boxHeight / imgRealHeight) * imgRealWidth - boxWidth) / 2;

                    img.css({
                        'width'      : 'auto',
                        'max-width'  : 'none',
                        'height'     : boxHeight,
                        'margin-left': -leftDistance
                    });
                }
            });
        });
    };
}));