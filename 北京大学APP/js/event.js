/**
 * Created by cz on 2016/11/14.
 */
$(function () {
    $(".nav_main>a").click(function () {
        $(".nav_main>a").removeClass("active_main");
        $(this).addClass("active_main");
        $(".content>div").hide();
        $(".content>div").eq($(this).index()).show();
    });
})