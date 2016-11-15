(function ( $ ) {
    $(document).ready(function(){
        $('.startscreen__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 2000,
            cssEase: 'linear'
        });

        $('.carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 500,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });

        var init = function() {
            $.gmap();
        };

        $( document ).on( 'DOMContentLoaded', init );
    });
}( jQuery, jQuery( window ) ));
