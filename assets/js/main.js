(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        //------------ Offcanvas Menu -------------

        $('.menu-open , .offcanvas-overlay').click(function () {
            $('.offcanvas-area , .offcanvas-overlay').addClass('active');
        });

        $('.menu-close , .offcanvas-overlay').click(function () {
            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');
        });


        //------------ Portfolio slider -------------

        $('.portfolio__main__slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })


        //------------ Testimonial slider -------------

        $('.testimonial__main__slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dot: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })


        //------------ Service slider -------------

        $('.service__main__slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dot: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        //--- Venobox service -----

        new VenoBox({
            selector: '.service-venobox'
        });


        //--- Venobox Video -----

        new VenoBox({
            selector: '.video-editing',
        });


        //--- Venobox Graphics -----

        new VenoBox({
            selector: '.graphic-gallery',
            numeration: true,
            infinigall: true,
            share: true,
            spinner: 'rotating-plane'
        });


        //--- Venobox Web -----

        new VenoBox({
            selector: '.web-gallery',
            numeration: true,
            infinigall: true,
            share: true,
            spinner: 'rotating-plane'
        });


        //--- Venobox Marketing -----

        new VenoBox({
            selector: '.marketing-gallery',
            numeration: true,
            infinigall: true,
            share: true,
            spinner: 'rotating-plane'
        });



        //--- Back to top js -----

        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)

            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)

            animationOutSpeed: 200, // Animation out speed (ms)

            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });


        //--- sticky js -----

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 145) {
                $(".header__area").removeClass("scroll-header");
            } else {
                $(".header__area").addClass("scroll-header");
            }
        });



    }); //---document-ready-----

}(jQuery));
