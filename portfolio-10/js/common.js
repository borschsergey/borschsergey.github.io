(function() {

    var formOrder = document.getElementById('formOrder');

    formOrder.onclick = DropForm;

    function DropForm() {
        document.getElementById("formOrderContent").classList.toggle("top-info__order--show");
        document.getElementById("formOrder").classList.toggle("form__btn--active");
        return false;
    }


    function BGM(link, cont) {
        var burgMenu = document.getElementById(link);

        burgMenu.onclick = moveFun;

        function moveFun() {
            document.getElementById(cont).classList.toggle("dropdownContent--show");
            return false;
        }

        window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdownContent");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('dropdownContent--show')) {
                        openDropdown.classList.remove('dropdownContent--show');
                    }
                }
            }
            return false;
        }
    }

    BGM('transport', 'transportContent');
    BGM('price', 'priceContent');
    BGM('careers', 'careersContent');

})();