$(document).ready(function () {
    $(".mobile-nav i").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu");
    });

    $('#doctor-carousel-section .owl-carousel').owlCarousel({
        loop: false, // Set to true if you want it to loop
        margin: 100,
        dots: true,
        nav: false, // Set to true if you want navigation arrows
        autoplay: false, // Set to true if you want autoplay
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3 // Display 5 items in desktop view
            }
        }
    });

    $('#hospital-carousel-section .owl-carousel').owlCarousel({
        loop: false, // Set to true if you want it to loop
        margin: 20,
        dots: true,
        nav: false, // Set to true if you want navigation arrows
        autoplay: false, // Set to true if you want autoplay
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3 // Display 5 items in desktop view
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });
});

