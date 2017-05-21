$(document).ready(function() {
  var clickableLinkGive = $('.remain__banks_give > \
                            .remain__banks__list > \
                            .remain__banks__list__element > \
                            .remain__banks__list__element__link'),

      clickableLinkTake = $('.remain__banks_take > \
                            .remain__banks__list > \
                            .remain__banks__list__element > \
                            .remain__banks__list__element__link');



  clickableLinkGive.click(function(event) {
    var largePath = $(this).attr('href'),
        subList = $(this).parent().find('.remain__banks__list__element__sub-list');


    $('.remain__group__img_give').attr('src', largePath);

    if ($(this) != $(this)) {
      $('.remain__banks__list__element__sub-list').slideUp(400);
    };

    $('.remain__banks_give > ul').addClass('remain__banks__list_dark');
    $('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #111 inset'});
    $('.remain__banks__list__element__link__img').css({'opacity': '.2'});

    $(this).parent().find('.remain__banks__list__element__link__img').css({'opacity': '1'});
    $(this).parent().find('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #fff inset'});

    subList.stop(false, true).slideDown(400);


    subList.find('.remain__banks__list__element__sub-list__elem').click(function(event) {
      var cashTitle = $(this).attr('data-title');
      $('.remain__group__txt_give').text(cashTitle);

      subList.stop(false, true).slideUp(400);

      $('.remain__banks_give > ul').removeClass('remain__banks__list_dark');
      $('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #ccc inset'});
      $('.remain__banks__list__element__link__img').css({'opacity': '1'});
    });

    return false;
  });





  clickableLinkTake.click(function(event) {
    var largePath = $(this).attr('href');
    $('.remain__group__img_take').attr('src', largePath);


    var subList = $(this).parent().find('.remain__banks__list__element__sub-list');

    if ($(this) != $(this)) {
      $('.remain__banks__list__element__sub-list').slideUp(400);
    }

    $('.remain__banks_take > ul').addClass('remain__banks__list_dark');
    $('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #111 inset'});
    $('.remain__banks__list__element__link__img').css({'opacity': '.2'});

    $(this).parent().find('.remain__banks__list__element__link__img').css({'opacity': '1'});
    $(this).parent().find('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #fff inset'});

    subList.stop(false, true).slideDown(400);


    subList.find('.remain__banks__list__element__sub-list__elem').click(function(event) {
      var cashTitle = $(this).attr('data-title');
      $('.remain__group__txt_take').text(cashTitle);

      subList.stop(false, true).slideUp(400);

      $('.remain__banks_take > ul').removeClass('remain__banks__list_dark');
      $('.remain__banks__list__element__link').css({'box-shadow': '0 0 20px 0 #ccc inset'});
      $('.remain__banks__list__element__link__img').css({'opacity': '1'});
    });


    return false;
  });
});
