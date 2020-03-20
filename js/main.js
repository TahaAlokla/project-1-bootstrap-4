$(function () {
    'use strict';
    

    

    // ************************
    var scrollUp = $('.scroll-up');

    // $(window).scroll(function (e) {
       
    //     // console.log($(this).scrollTop());
    //     if ($(this).scrollTop() >= 800) {
    //         scrollUp.show();
    //     } else {
    //         scrollUp.hide();
    //     }
    // });

    window.addEventListener("wheel", function(){
        if ($(this).scrollTop() >= 800) {
            scrollUp.show();
        } else {
            scrollUp.hide();
        }
    },{passive: false});




    // * Animate Scroll-up to 0  then click button scroll-up ^
    scrollUp.click(function (e) {
         e.preventDefault();
        $('html , body').animate({ scrollTop: 0 }, 1000);
    });

    // * Adjust Slider height
    var window_heigh = $(window).height(),
        upper_nav_height = $('.upper-bar').innerHeight(),
        nav_bar_height = $('.navbar').innerHeight();
    // ** innerHeight(); : height + padding Element Selector

    $('.slider , .carousel-item').height(window_heigh - (upper_nav_height + nav_bar_height));

    // featured-work Shuffle 
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        // Test Printing Data Class of il
        console.log($(this).data('class'));

        if ($(this).data('class') == 'All') {
            $('.featured-work .shuffel-img .col-md').css('opacity', 1)
        } else {
            $('.featured-work .shuffel-img .col-md').css('opacity', '0.2');
            $($(this).data('class')).parent().css('opacity', '1');
        }

    });

    $("html , body").niceScroll({
        passive: true
    });
});