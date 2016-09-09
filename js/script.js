/**
 * Created by qiaoer on 16/9/9.
 */
AOS.init({
    offset: 200,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
});

$(function () {
    $('.sidebar-trigger').click(function () {
        $('.mask').show();
        $('aside').animate({
            right:0
        });


    });
    $('.mask').click(function () {
        $('aside').animate({
            right:-300
        });
        $('.mask').hide();
    });
});