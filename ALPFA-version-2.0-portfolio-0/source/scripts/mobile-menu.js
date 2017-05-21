$(document).ready(function() {
  var touch = $('.mobole-menu__text'),
      menu = $('.menu'),
      childrenMenu = $('.menu > .menu__list > .menu__list__elem'),
      relogForm = $('.rectangle__relog'),
      touchForm = $('.camon-menu');


  $(touch).on('click', function() {
    menu.stop(false, true).slideToggle();
  });

  touchForm.on('click', function(event) {
    relogForm.stop(false, true).slideToggle();
  })

  $(window).resize(function() {
    var wid = $(window).width();
    if (wid > 720 && menu.is(':hidden') && relogForm.is(':hidden')) {
      menu.removeAttr('style');
      relogForm.removeAttr('style');
    }
  });



  $('.lang > .lang__link').on('click', function(event) {
    $(this).parent().find('.lang__link').removeClass('active');
    $(this).addClass('active');
  })
});
