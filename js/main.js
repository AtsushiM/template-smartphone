var XXX = (function(win, doc, $) {
    //mobile check
    var isMobile = (function() {
        var m = navigator.userAgent.match;

        return {
            Android: function() {
                return m(/Android/i) ? true : false;
            },
            iOS: function() {
                return m(/iPhone|iPad|iPod/i) ? true : false;
            },
            Windows: function() {
                return m(/IEMobile/i) ? true : false;
            },
            any: function() {
                return (
                    isMobile.Android() ||
                    isMobile.BlackBerry() ||
                    isMobile.iOS() ||
                    isMobile.Windows()
                );
            }
        };
    }());

    //scrollbar
    (function() {
        win.addEventListener('load', function() {
            setTimeout(doScroll, 100);
        }, false);
        win.onorientationchange = function() {
            setTimeout(doScroll, 100);
        };
        function doScroll() {
            if (win.pageYOffset === 0) {
                win.scrollTo(0, 1);
            }
        }
    }());
}(window, document, jQuery));
