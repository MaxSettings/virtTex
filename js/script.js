$(document).ready(function() {

    $('.burger-btn').click(function(event) {
        $('.burger-btn').toggleClass('burger-btn--active');
        $('.burger-btn__stick').toggleClass('burger-btn__stick--active');
        $('.site-header__link').toggleClass('site-header__link--active');
        $('.header__site-btn').toggleClass('header__site-btn--active');
        $('.site-menu__inner').toggleClass('site-menu__inner--active');
        $('.currency-rates').removeClass('currency-rates--active');

    });


    $('.site-menu__notifications').click(function(event) {
        $('.currency-rates').toggleClass('currency-rates--active');
        $('.burger-btn').removeClass('burger-btn--active');
        $('.burger-btn__stick').removeClass('burger-btn__stick--active');
        $('.site-header__link').removeClass('site-header__link--active');
        $('.header__site-btn').removeClass('header__site-btn--active');
        $('.site-menu__inner ').removeClass('site-menu__inner--active');
    });


    $('.currency-rates__close-btn').click(function(event) {
        $('.currency-rates').removeClass('currency-rates--active');
    });

});