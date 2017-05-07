$(document).ready(function() {
    $(window).scroll(function(event) {
        if ( $(this).scrollTop() > 120 ) {
            $('.header__box').css({
              'position': 'fixed',
          		'top': '0',
          		'left': '0',
          		'width': '100%',
          		'box-sizing': 'border-box',
          		'padding': '20px',
          		'background': '#222',
          		'z-index': '5'
            });
        } else {
            $('.header__box').css({
              'position': 'relative',
          		'top': '0',
          		'left': '0',
          		'width': 'auto',
          		'box-sizing': 'border-box',
          		'padding': '20px',
          		'background': 'transparent',
          		'z-index': '5'
            });
        }
    });
});
