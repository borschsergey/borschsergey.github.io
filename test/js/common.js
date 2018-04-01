var link = $('.acordion_block > .block_link');

for (let i = 0; i < link.length; i++) {
    link[i].onclick = function(e) {
        e.preventDefault();
        $(this).toggleClass('active_link');

        var blockWrap = $(this).next();
        blockWrap.stop().slideToggle(300);
    };
};


$('.slide_wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '0px',
    pauseOnFocus: false,
    responsive: [{
        breakpoint: 1150,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 2
        }
    }, {
        breakpoint: 520,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }]
});
$('.slide_wrap').slick();