var open = false;
$(function () {
    $(window).on("scroll", function () {
        if(!open) {
            if ($(window).scrollTop() > 10) {
                $(".navbar").addClass("active");
            } else {
                $(".navbar").removeClass("active");
            }
        }
    });
});

$(document).ready(function () {

    $(".card").hover(
        function () {
            $(this).addClass("shadow-lg").css("transition", ".3s");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );
    $(".navbar-toggler").on("click",
        function () {
            if ($(window).scrollTop() <= 10) {
                $(".navbar").toggleClass("active");
            }
            open = !open;
        }
    );

});