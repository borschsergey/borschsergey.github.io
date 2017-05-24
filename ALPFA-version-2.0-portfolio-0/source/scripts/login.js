$(document).ready(function() {
  $('.rectangle__relog__sing').on('click', function(event) {
    $('.cameonform').fadeIn(500);
    $('body').css({'overflow': 'hidden'});


  var field = new Array('login', 'pass');

  $('.login__form').submit(function() {
    var error=0;

    $('.login__form').find(':input').each(function() {
      for(var i=0;i<field.length;i++){
        if($(this).attr('name')==field[i]){

          if(!$(this).val()){
            $(this).css('border', 'red 1px solid');
            error=1;
          }	else {
            $(this).css('border', 'gray 1px solid');
          }
        };
      };
    });

  if(error==0){
    return true;
    $('.cameonform').fadeOut(500);
    $('body').css({'overflow': 'auto'});
  }	else {
    var err_text = '';
    if(error==1)  err_text='Не все обязательные поля заполнены!';

    $('.messenger').html(err_text);
    $('.messenger').fadeIn('slow');
    return false;
  }
  });

  });

  $('.login__form__close').on('click', function(event) {
    $('.cameonform').fadeOut(500);
    $('body').css({'overflow': 'auto'});
  })
});
