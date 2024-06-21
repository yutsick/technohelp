jQuery(function ($) {

    $('.slider').slick({
        slidesToShow: 1, // Показувати 3 блоки
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        // adaptiveHeight: true,
        mobileFirst: true,
        //accessibility: false,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

        ]
    });

    
    $('.slider-gallery').slick({
        slidesToShow: 1, // Показувати 3 блоки
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        // adaptiveHeight: true,
        mobileFirst: true,
        //accessibility: false,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

        ]
    });

   

});