(function ( $ ) {
    $(document).ready(function(){
        var header = $('.header'),
            headerFake = $('.header__fake'),
            buttonScroll = $('.footer__btn'),
            topPosition = $(window).scrollTop(),
            product = $('.product'),
            stretchClass = ('product--stretch'),
            contact = $('.contact');
            screenWidth = $( window ).width();

        function fixedHeader() {
            var dropdown = $( '.header-nav__dropdown' ),
                headerAdd = $('.header__add'),
                logoImg = $('.header-nav__item--logo'),
                timeEffect = 250,
                topPosition = $(window).scrollTop();

            if (topPosition >= 1){
                headerAdd.hide( 'blind', timeEffect );
                logoImg.show();
                headerFake.css('height','150px');
            } else {
                headerAdd.show('blind', timeEffect );
                logoImg.hide();
                headerFake.css('height','242px');
            }
        };

        if ( product.length > 0 || contact.length > 0 ) {
            header.removeClass('header__fix');
            headerFake.hide();
        }

        if ( screenWidth > 767 && (product.length === 0) && (contact.length === 0) ) {
            $( window ).on('scroll', fixedHeader);
        }

        buttonScroll.on('click', function (e) {
            var scrollTime = 2000;
            e.preventDefault();
            $('body,html').animate({
                'scrollTop':0
            },scrollTime);
        });

        function stretchProductPage() {
            var pageHeight = $( '.page__wrapper' ).outerHeight(),
                screenHeight = $( window ).outerHeight();

            if (screenHeight > pageHeight) {
                product.addClass(stretchClass);
            }
        };

        var changeStreching = function() {
            product.removeClass(stretchClass);
            stretchProductPage();
        };

        $(window).on('load', changeStreching);

        $(window).resize(changeStreching);
    });
}( jQuery, jQuery( window ) ));

