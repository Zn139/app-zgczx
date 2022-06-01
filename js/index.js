$(function (){
    if ($(document).width() < 1000){
        console.log(' 小屏幕 ');
        $('.swiper-page').find('.swiper-wrapper').eq(0).removeClass('swiper-wrapper');
        // subbanner
        var mySubbanner = new Swiper('.swiper-subbanner', {
            slidesPerView : 3,
            slidesPerGroup : 3,
            //autoplay: 8000,
            //autoplayDisableOnInteraction : false,
            //loop : true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })
    } else {
        console.log(' 大屏幕 ');
        // 三屏滚动
        var myPageSwiper = new Swiper('.swiper-page',{
            pagination: '.swiper-pagination',
            //slidesPerView: 1,
            paginationClickable: true,
            direction: 'vertical',
            mousewheelControl: true,
            autoplayDisableOnInteraction : false,
            height: $('html').height()
        });
        // subbanner
        var mySubbanner = new Swiper('.swiper-subbanner', {
            slidesPerView : 5,
            slidesPerGroup : 5,
            //autoplay: 8000,
            //autoplayDisableOnInteraction : false,
            //loop : true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        });
        // 鼠标移入时，停止滚动
        $('.swiper-subbanner').on('mouseover', function (){
            mySubbanner.stopAutoplay();
        });
        // 鼠标移出时，重新开始滚动
        $('.swiper-subbanner').on('mouseout', function (){
            mySubbanner.startAutoplay();
        });
    }
    // banner
    var mySwiper = new Swiper('.swiper-banner', {
        //可选选项，自动滑动
        autoplay: 5000,
        loop : true,
        autoplayDisableOnInteraction : false,
    })

    // page3
    var mypage3Swiper = new Swiper('.swiper-page3-content', {
        autoplay: 5000,
        loop : true,
        autoplayDisableOnInteraction : false,
    })

    // search  
    $('.icon-search').click(function (){
        $('#search').addClass('is-visible');
        $(this).css({'right':'100px'});
        $(this).addClass('btn-search');
        $('.icon-close').addClass('is-visible');
        setTimeout(function (){
            "use strict";
            $('.keyword').focus();
        },800);
    })
    // 点击close 搜索
    $('.icon-close').click(function (){
        $('#search').removeClass('is-visible');
        $('.icon-close').removeClass('is-visible');
        $('.icon-search').removeClass('btn-search');
        $('.icon-search').css({'right':'60px'});
    });

    // 搜索
    $(document).on('click', '.btn-search', function (){
        var keyword = $('.keyword').val();
        if (keyword){
            console.log(keyword);
        }

    });

    // 头部导航
    $('.navbar-nav .dropdown').on('mouseover', function (){
        "use strict";
        $(this).addClass('open');
    });
    $('.navbar-nav .dropdown').on('mouseout', function (){
        "use strict";
        $(this).removeClass('open');
    });
});