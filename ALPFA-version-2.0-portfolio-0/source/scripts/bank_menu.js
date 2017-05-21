$(document).ready(function() {
  var touch = $('.remain__group__btn_give');
  var menu = $('.remain__banks_give');

  $(touch).on('click', function() {
    if ($('.remain__banks_take').css('display') === 'block') {
      $('.remain__banks_take').slideUp(500);
    }

    menu.stop(false, true).slideToggle();

    $('.remain__banks__list__element__sub-list__elem').on('click', function(event) {
      menu.slideUp(500);
    });
  });
});





$(document).ready(function() {
  var touch = $('.remain__group__btn_take');
  var menu = $('.remain__banks_take');

  $(touch).on('click', function() {
    if ($('.remain__banks_give').css('display') === 'block') {
      $('.remain__banks_give').slideUp(500);
    }

    menu.stop(false, true).slideToggle();

    $('.remain__banks__list__element__sub-list__elem').on('click', function(event) {
      menu.slideUp(500);
    });
  });
});
