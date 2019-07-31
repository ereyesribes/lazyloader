$(function() {
  "use strict";

  var
    // How many pixels in advance (ie before we see an image) we load it.
    lazyMargin = 300,
    lazyloadThrottleTimeout;

  // Make image responsive.
  var lazyHeights = function() {
    var $lazyResp = $('img.lazy.lazy-resp');

    $lazyResp.each(function(imgIndex, img) {
      var
        $img = $(img),
        width = parseInt($img.attr('data-width'));

      if ($img.parent().width() < width) {
        width = $img.parent().width();
      }

      var height = width / parseFloat($img.attr('data-prop'));

      $img.css({
        "height": height,
        "width": width
      });
    });
  };

  // Lazy load per se
  var lazyload = function () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var
          $lazy = $('img.lazy'),
          scrollTop = window.pageYOffset;

        $lazy.each(function(imgIndex, img) {
            var $img = $(img);

            if($img.offset().top - lazyMargin < ($(window).height() + scrollTop)) {
              $img
                .attr("src", $img.attr('data-src'))
                .removeClass('lazy');

              $img.on('load', function() {
                var $this = $(this);

                if ($this.hasClass('lazy-resp')) {
                  $this.css({
                    "height": "auto",
                    "width": "auto"
                  });
                }
              });
            }
        });

        if($lazy.length === 0) {
          $(document).off('scroll', lazyload);
          $(window)
            .off('resize', lazyload)
            .off('orientationChange', lazyload);
        }
    }, 20);
  };

  lazyHeights();
  lazyload();

  $(document).on('scroll', lazyload);
  $(window)
    .on('resize', lazyload)
    .on('orientationChange', lazyload);

  $(window).on('resize', lazyHeights);
});
