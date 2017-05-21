var imgPos = [
              "0.png",
              "1.png",
              "2.png",
              "3.png",
              "4.png",
              "5.png",
              "6.png",
              "7.png",
              "8.png",
              "9.png",

              "5.png",
              "4.png",
              "3.png",
              "2.png",
              "1.png",
              "6.png",
              "8.png",
              "7.png",
              "0.png",
              "9.png",
          ];


//Наполняем
for (var i = 0; i < imgPos.length; i++) {
  $('.remain__banks_give > .remain__banks__list').append(
    '<li class="remain__banks__list__element">\
      <a href="source/img/'+imgPos[i]+'" class="remain__banks__list__element__link">\
        <img class="remain__banks__list__element__link__img" src="source/img/'+imgPos[i]+'">\
      </a>\
      <ul class="remain__banks__list__element__sub-list">\
        <li class="remain__banks__list__element__sub-list__elem" data-title="USD">USD</li>\
        <li class="remain__banks__list__element__sub-list__elem" data-title="EUR">EUR</li>\
        <li class="remain__banks__list__element__sub-list__elem" data-title="KZT">KZT</li>\
      </ul>\
    </li>'
  );
}





var imgPosT = [
              "9.png",
              "6.png",
              "2.png",
              "3.png",
              "4.png",
              "5.png",
              "8.png",
              "7.png",
              "1.png",
              "0.png",

              "9.png",
              "0.png",
              "8.png",
              "7.png",
              "6.png",
              "4.png",
              "3.png",
              "5.png",
              "2.png",
              "1.png",
          ];


//Наполняем
for (var i = 0; i < imgPosT.length; i++) {
  $('.remain__banks_take > .remain__banks__list').append(
    '<li class="remain__banks__list__element">\
      <a href="source/img/'+imgPosT[i]+'" class="remain__banks__list__element__link">\
        <img class="remain__banks__list__element__link__img" src="source/img/'+imgPosT[i]+'">\
      </a>\
      <ul class="remain__banks__list__element__sub-list">\
        <li class="remain__banks__list__element__sub-list__elem" data-title="USD">USD</li>\
        <li class="remain__banks__list__element__sub-list__elem" data-title="EUR">EUR</li>\
        <li class="remain__banks__list__element__sub-list__elem" data-title="KZT">KZT</li>\
      </ul>\
    </li>'
  );
}
