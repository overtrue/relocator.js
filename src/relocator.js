/**
 * @fileOverview relocator.js
 * @version 1.0.0
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
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */
(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
    $,fn.relocate = function(img_selector, box_selector) {
        $(img_selector).find('img').each(function() {
            var img     = $(this);
            var box     = box_selector ? img.closest(box_selector) : img.parent();
            var tmp_img = new Image();

            box.css({'position':'relative', 'overflow':'hidden'});

            tmp_img.src = img.attr('src');

            $(tmp_img).load(function() {
                var tmp = $(this).get(0);
                var img_real_width  = tmp.naturalWidth;
                var img_real_height = tmp.naturalHeight;

                var box_width  = parseInt(box.css('width'));
                var box_height = parseInt(box.css('height'));

                var img_ratio = img_real_width / img_real_height;
                var box_ratio = box_width / box_height;

                if (img_ratio < box_ratio) {
                   var top_distance = (((box_width / img_real_width) * img_real_height) - box_height) / 2;
                   img.css({'width':box_width, 'height':'auto', 'margin-top':-top_distance});
                } else {
                   var left_distance = (((box_height / img_real_height) * img_real_width) - box_width) / 2;
                   img.css({'width':'auto', 'height':box_height, 'margin-left':-left_distance});
                }
            });
        });
    }
})(jQuery));