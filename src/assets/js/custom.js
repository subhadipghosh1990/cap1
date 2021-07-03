$(document).ready(function () {
    $(".toggleMenu").click(function () {
        $(this).find("i").toggleClass("fa-bars fa-times");
        $("nav").toggleClass("fullHt");
    });
});