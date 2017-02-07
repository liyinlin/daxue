/**
 * Created by cz on 2016/11/14.
 */
$(function () {
    if($(".banner_index .swiper-slide").size()>1){
        var swiper = new Swiper('.banner_index', {
            initialSlide: 0,
            autoplay:1500,
            speed: 300,
            grabCursor: true,
            autoplayDisableOnInteraction : false,
            loop:true,
            pagination : '.swiper-pagination',
            paginationClickable: true
        });
    }
});