$('#formOrder').click(function(e) {
    e.preventDefault();
    var container = $("#formOrderContent")

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.toggleClass("top-info__order--show");
        $(this).toggleClass("form__btn--active");
    } else {
        container.toggleClass("top-info__order--show");
        $(this).toggleClass("form__btn--active");
    }

    $(document).click(function(e) {
        if ($(e.target).closest("#formOrderContent, #formOrder").length) {
            return;
        }
        $("#formOrderContent").removeClass("top-info__order--show").stop(true, true);
        $('#formOrder').removeClass("form__btn--active").stop(true, true);
        e.stopPropagation();
    });

    $(this).parent().find('.form__send').click(function() {
        $("#formOrderContent").removeClass("top-info__order--show");
        $('#formOrder').removeClass("form__btn--active");
    });
});



function BGM(link, cont) {

    $('#' + link).click(function(e) {
        e.preventDefault();
        var DRCont = $('#' + cont);

        if ($(this).is(e.target) && $(this).has(e.target).length === 0) {
            $(this).parent().find(DRCont).toggleClass("dropdownContent--show");
        } else {
            $(this).parent().find(DRCont).toggleClass("dropdownContent--show");
        }

        $(document).click(function(e) {
            if ($(e.target).closest('#' + link).length)
                return false;
            $(DRCont).removeClass("dropdownContent--show").stop(true, true);
            e.stopPropagation();
        });
    });
}


BGM('transport', 'transportContent');
BGM('price', 'priceContent');
BGM('careers', 'careersContent');