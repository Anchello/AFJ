(function ( $ ) {
    $( document ).ready(function(){
        var timeDelay = 200,
            galleryLink = $( '.product__photo-list .product__photo-img' ),
            navLink = $( '.header-nav__subitem-link' ),
            navItem = $('.header-nav__link'),
            navItemMore = $('.header-nav__item--more'),
            navLinkMore = navItemMore.find('.header-nav__link'),
            dropdown = '.header-nav__dropdown';

        var changeGalleryLink = function() {
            var srcImg = $(this).attr('src'),
                galleryImg = $(this).parents().find('.product__main-img');

            galleryImg.attr('src', srcImg);
        };

        var setHandlerIn = function() {
            clearTimeout( $.data( this,'timer' ) );
            $( dropdown,this ).stop( true,true ).show( 'blind', timeDelay );
            $(this).addClass('active');
        };

        var setHandlerOut = function() {
            $.data( this,'timer', setTimeout( $.proxy(function() {
                $( dropdown,this ).stop( true,true ).hide( 'blind', timeDelay );
                $(this).removeClass('active');
            }, this), 100));
        };

        var changeImgLink = function() {
            var srcImg = $(this).data('image'),
                activeNavItem = navItemMore.hasClass('active'),
                navImg = $('.active').find('.header-nav__img-item');

            navImg.attr('src', srcImg);
        };

        var onClickNav = function(e) {
            var button = $(this),
                dropdownList = button.next(dropdown),
                currentButton = $('.header-nav__item .active'),
                currentDropdownList = currentButton.next(dropdown);

            if (!$(this).hasClass('active')) {
                currentButton.removeClass('active');
                currentDropdownList.hide( 'blind', 300 );
                dropdownList.show( 'blind', 300 );
                $(this).addClass('active');
            } else {
                dropdownList.hide( 'blind', 300 );
                $(this).removeClass('active');
            }
            e.preventDefault();
        };

        galleryLink.on('mouseover', changeGalleryLink);

        if ( !Assist.isMobile.any() ) {
            navItemMore.hover( setHandlerIn, setHandlerOut);
            navLink.on('mouseover', changeImgLink);
        }

        if ( Assist.isMobile.any() ) {
            navLinkMore.on('click', onClickNav);
        }

        function scrollTo( target ) {
            var body = $( 'html, body' ),
                target = $( target );

            body.animate({
                scrollTop: $( target ).offset().top
            }, 1000);
        };

        navItem.on('click', function (e) {
            var button = $(this),
                product = $('.product'),
                target = button.attr( 'href' );

            if (target.substr( 0, 1 ) === '#') {
                if (product.length === 0) {
                    scrollTo( target );
                } else {
                    e.preventDefault()
                };
            }
        });

    })
}( jQuery, jQuery( window ) ));
