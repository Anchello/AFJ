(function ( $ ) {
    $(document).ready(function(){
        var buttonMenu = $( '.header__icon-menu' ),
            body = $( 'body' ),
            header = $('.header'),
            mobileMenu = $('.mobile'),
            buttonSublist = $('.mobile-nav__link--sublist'),
            mobileSublist= $('.mobile-nav__sublist'),
            openClass = 'mobile-nav__link--opened',
            timeEffect = 300,
            count = 0,
            countList = 0;

        function openMobile() {
            mobileMenu.show( 'blind', timeEffect );
            body.addClass('page--overlay');
        };

        function closeMobile() {
            mobileMenu.hide( 'blind', timeEffect );
            body.removeClass('page--overlay');
        };

        buttonMenu.on('click', function (e) {
            if (count === 0) {
                openMobile();
                count = 1;
            } else {
                closeMobile();
                count = 0;
            }
            e.preventDefault();
        });

        function closeCurrentSublist() {
            var currentButtonSublist = $('.mobile-nav__link--opened');
            var currentSublistId = currentButtonSublist.data( 'sublist' );
            var currentSublist = $( '.mobile-nav__sublist--' + currentSublistId );
            currentButtonSublist.removeClass(openClass);
            currentSublist.hide( 'blind', timeEffect );
        };

        buttonSublist.on('click', function (e) {
            var sublistId = $(this).data( 'sublist' );
            var sublist = $( '.mobile-nav__sublist--' + sublistId );

            if(!$(this).hasClass(openClass)){
                closeCurrentSublist();
                $(this).addClass(openClass);
                sublist.show( 'blind', timeEffect );
            } else {
                $(this).removeClass(openClass);
                sublist.hide( 'blind', timeEffect );
            }
            e.preventDefault();
        });
    })
}( jQuery, jQuery( window ) ));
