$(".rectangle__contact__numb__coll__elem")
.hover(function () {
    $(this).clone().css({
							'font-size':'10px',
							'background': 'rgba(17,17,17,.9)',
							'position': 'absolute',
							'z-index': '10',
							'top': '-20px',
							'left': '20%',
							'border-radius': '20px',
							'color': '#f1f1f1',
							'padding': '5px',
							'padding-left': '30px'
						})
      .appendTo('.rectangle__contact__numb');
    },
function () {
	$(this)
			.parent()
			.parent()
			.find('.rectangle__contact__numb__coll__elem[style]')
			.detach()
});
