$(function() {

    $(window).on("scroll", function() {

        if ($(this).scrollTop() >= 100) {
            $(".navbar").addClass("bg-nav");
        } else {
            $(".navbar").removeClass("bg-nav");
        }
    })

});