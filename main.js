//Scroll up

document.getElementById("buttonup").addEventListener("click", scrollup);
function scrollup() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}
window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 200) {

        buttonup.style.transform = "scale(1)";
    } else if (scroll < 200) {
        buttonup.style.transform = "scale(0)";
    }
}


/*Jquery movilidad al ScrollUp*/

$(document).ready(function () {
    $("button").click(function () {
        $("#buttonup").animate({ bottom: '5000px' });
        $("#buttonup").animate({ bottom: '25px' });
    });

});

