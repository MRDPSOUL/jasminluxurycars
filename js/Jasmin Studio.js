$('.carousel').carousel({
  interval: 2000
})


// on ready function
jQuery(document).ready(function ($) {
  'use strict';

  // Preloader
  $('#status').fadeOut();
  $('#preloader')
    .delay(350)
    .fadeOut('slow');

  /**** select2 js ****/

  $('.myselect').select2();

  /*--------------------------
  nice Select active
  ---------------------------- */

  $('select').niceSelect();

  //-----------Search box jquery------------//

  $('.searchd').on('click', function () {
    $('.searchbox').addClass('open', 1000);
  });

  $('.close').on('click', function () {
    $('.searchbox').removeClass('open', 1000);
  });

  // Menu js for Position fixed
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 160) {
      $('.hs_navigation_header_wrapper').addClass(
        'menu_fixed animated fadeInDown'
      );
    } else {
      $('.hs_navigation_header_wrapper').removeClass(
        'menu_fixed animated fadeInDown'
      );
    }
  });

  // ===== Scroll to Top ====
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });
  $('#return-to-top').on('click', function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
