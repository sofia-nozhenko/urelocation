// SCROLL
$(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 92) {
        $(".header-sticky").removeClass("sticky-bar");
        $("#back-top").fadeOut("slow");
    } else {
        $(".header-sticky").addClass("sticky-bar");
        $("#back-top").fadeIn("slow");
    }
});

// SLICK SLIDER
$(document).ready(function () {
    $(".companies-slider").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

$(document).ready(function () {
    $(".professions").slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<img src='/img/arrow-prew.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/img/arrow-next.svg' class='prev' alt='1'>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

// Accordion

$(function () {
    //BEGIN
    $(".accordion__title").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $(".accordion__arrow").removeClass("accordion__rotate");
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $(".accordion__arrow", this).toggleClass("accordion__rotate");
    });
    //END
});

// MODAL

$(".btn-open").on("click", function () {
    $("#window-wrapper").toggleClass("active");
});

$("#btn-close").on("click", function () {
    $("#window-wrapper").toggleClass("active");
});

$(document).on("click", function (event) {
    if (event.target.id === "window-wrapper") {
        $("#window-wrapper").removeClass("active");
    }
});

// Anchor links
$(function () {
    $(".price").on("click", function (e) {
        $("html,body")
            .stop()
            .animate({ scrollTop: $(".start").offset().top }, 1000);
        e.preventDefault();
    });
});

$(function () {
    $(".faq-btn").on("click", function (e) {
        $("html,body")
            .stop()
            .animate({ scrollTop: $(".faq-section").offset().top }, 1000);
        e.preventDefault();
    });
});

$(function () {
    $(".contact-btn").on("click", function (e) {
        $("html,body")
            .stop()
            .animate({ scrollTop: $(".contacts").offset().top }, 1000);
        e.preventDefault();
    });
});

// PRELOADER
$(window).on("load", function () {
    $("#preloader-active").delay(500).fadeOut("slow");
    $("body").delay(5000).css({
        overflow: "visible",
    });
});
