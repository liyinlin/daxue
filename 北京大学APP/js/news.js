/**
 * Created by cz on 2016/11/15.
 */
$(function () {
    for(var i=0;i<$(".list>a").size();i++){
        var value_p=$(".list>a:nth-child("+(i+1)+")>div:nth-child(1)>p").html();
        var value=$(".list>a:nth-child("+(i+1)+")>div:nth-child(1)>div").html();
        $(".list>a:nth-child("+(i+1)+")>div:nth-child(1)>div").html(storage.getEString(value,25,""));
        $(".list>a:nth-child("+(i+1)+")>div:nth-child(1)>p").html(storage.getEString(value_p,48));
    }
})