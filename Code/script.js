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
  // executes when HTML-Document is loaded and DOM is ready

    $(".card-group").hover(
        function () {
            $(this).find(".card").addClass("shadow-lg").css("transition", ".3s");
            //$(this).addClass("shadow").css({"cursor": "pointer", "transition": ".3s", "transform": "scale(1.1)"});
        },
        function () {
            $(this).find(".card").removeClass("shadow-lg");
            //$(this).removeClass("shadow").css("transform", "scale(1)");
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
