
/* --strict mode enabled 
	-------------------------------------*/
"use strict";

$(window).on("load", function () {
  /* --preloader 
	-------------------------------------*/
  $("body").imagesLoaded(function () {
    $(".tb-preloader-wave").fadeOut();
    $("#tb-preloader").delay(200).fadeOut("slow").remove();
  });
});

$(function () {
  /* -- Nice scroll for custom scroll-bar 
	----------------------------------- --*/

  /* --affixed nav
  ----------------------------------- --*/
  var _navbarDefault = $(".navbar-default");
  $(document).on("scroll", function () {
    if ($(this).scrollTop() > $(".banner").offset().top) {
      _navbarDefault.addClass("fixed_top");
    } else {
      _navbarDefault.removeClass("fixed_top");
    }
  });

  /*-- animated nav button
	----------------------------------- --*/
  $("header .navbar-toggle").on("click", function () {
    $(this).toggleClass("change");
  });

  /*-- Animation on scroll
	---------------------------------- --*/
  new WOW().init();

  /* --owl carousel
	-------------------------------------*/

  $(".portfolio .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".blog .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".skills .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  /* --counter up
	-------------------------------------*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* --progress bar
	-------------------------------------*/
  $(".progress-element").each(function () {
    $(this).waypoint(
      function () {
        var progressBar = $(".progress-bar");
        progressBar.each(function (indx) {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      },
      {
        triggerOnce: true,
        offset: "bottom-in-view",
      }
    );
  });

  /* --tooltip
	-------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();
});

// revolution slider

var tpj = jQuery;

var revapi1078;
tpj(document).ready(function () {
  if (tpj("#slider1").revolution == undefined) {
    revslider_showDoubleJqueryError("#slider1");
  } else {
    revapi1078 = tpj("#slider1")
      .show()
      .revolution({
        sliderType: "standard",
        jsFileLocation:
          "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
          touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
          },
          arrows: {
            style: "uranus",
            enable: true,
            hide_onmobile: true,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: "",
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 0,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 0,
              v_offset: 0,
            },
          },
        },
        viewPort: {
          enable: true,
          outof: "pause",
          visible_area: "60%",
          presize: false,
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [600, 600, 500, 400],
        lazyType: "smart",
        parallax: {
          type: "mouse",
          origo: "slidercenter",
          speed: 2000,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
          type: "mouse",
        },
        shadow: 0,
        spinner: "spinner0",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreen: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
  }
}); /*ready*/
