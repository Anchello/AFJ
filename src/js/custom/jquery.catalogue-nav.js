(function ( $ ) {
    $(document).ready(function(){
        var buttonMenu = $( '.header__icon-menu' ),
            buttonCatalogue = $('.catalogue__nav-text'),
            openClass = 'catalogue__nav-text--opened',
            buttonSelect = $('.catalogue__select'),
            optionSelect = $('.catalogue__droplist-item'),
            mobileButtonSelect = $('.mobile__list'),
            mobileOption = $('.mobile__droplist-item'),
            timeToggle = 100,
            timeEffect = 300;

        buttonCatalogue.on('click', function (e) {
            var selectId = $(this).data( 'select' ),
                selectList = $( '.catalogue__select--' + selectId );

            if(!$(this).hasClass(openClass)){
                closeCurrentSelectList();
                $(this).addClass(openClass);
                selectList.show( 'blind', timeToggle );
            } else {
                $(this).removeClass(openClass);
                selectList.hide( 'blind', timeToggle );
            };
            e.preventDefault();
        });

        function closeCurrentSelectList() {
            var currentButtonCatalogue = $('.catalogue__nav-text--opened'),
            currentSelectId = currentButtonCatalogue.data( 'select' ),
            currentSelectList = $( '.catalogue__select--' + currentSelectId );

            currentButtonCatalogue.removeClass(openClass);
            currentSelectList.hide( 'blind', timeToggle );
        };

        buttonSelect.on('click', function (e) {
            var droplistId = $(this).data( 'droplist' ),
                droplist = $(this).children( '.catalogue__droplist--' + droplistId );

            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                droplist.show( 'blind', timeEffect );
            } else {
                $(this).removeClass('active');
                droplist.hide( 'blind', timeEffect );
            };

            e.preventDefault();
        });

        optionSelect.on('click', function (e) {
            var textOption = $(this).text();
            var currentFieldSelect = $(this).parent().prev('.catalogue__field');
            currentFieldSelect.text(textOption);
            currentFieldSelect.addClass('catalogue__field--checked')
            e.preventDefault();
        });

        function closeCurrentMobileSelect() {
            var currentMobileSelect = $('.mobile__list--opened'),
                currentMoblistId = currentMobileSelect.data( 'moblist' ),
                currentMoblist = $( '.mobile__dropdown--' + currentMoblistId );

            currentMobileSelect.removeClass('mobile__list--opened');
            currentMoblist.hide( 'blind', timeToggle );
        };

        mobileButtonSelect.on('click', function (e) {
            var moblistId = $(this).data( 'moblist' ),
                moblist = $( '.mobile__dropdown--' + moblistId );

            if(!$(this).hasClass('mobile__list--opened')){
                closeCurrentMobileSelect();
                !$(this).addClass('mobile__list--opened');
                moblist.show( 'blind', timeEffect );
            } else {
                !$(this).removeClass('mobile__list--opened');
                moblist.hide( 'blind', timeEffect );
            };

            e.preventDefault();
        });

        mobileOption.on('click', function (e) {
            var textOption = $(this).text(),
                currentMobileField = $(this).parents().prev('.mobile__field');

            currentMobileField.text(textOption);
            currentMobileField.addClass('mobile__field--checked');
            e.preventDefault();
        });
    })
}( jQuery, jQuery( window ) ));

