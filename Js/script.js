$(document).ready(function () {

    $(".navbar-toggler").click(function () {

        $(".navbar-brand img").attr("src", "images/Brand-logo-2.png");
        $(".navbar").addClass("bg-color shadow").addClass("bg-tran");
    })



    if ($(window).scrollTop() > 10) {

        $(".navbar-brand img").attr("src", "images/Brand-logo-2.png");
        $(".navbar").addClass("bg-color shadow").removeClass("bg-tran");

    } else {

        $(".navbar-brand img").attr("src", "images/Brand-logo.png")
        $(".navbar").addClass("bg-tran").removeClass("bg-color shadow");
    };

    $(window).scroll(function () {

        if ($(window).scrollTop() > 10) {

            $(".navbar-brand img").attr("src", "images/Brand-logo-2.png");
            $(".navbar").addClass("bg-color shadow").removeClass("bg-tran");

        } else {

            $(".navbar-brand img").attr("src", "images/Brand-logo.png")
            $(".navbar").addClass("bg-tran").removeClass("bg-color shadow");
        }
    });



});