/**
 * Created by cz on 2016/11/15.
 */
$(function () {
    for(var i=0;i<$(".list>a").size();i++){
        var value=$(".list>a:nth-child("+(i+1)+")>div:nth-child(2)>p").html();
        $(".list>a:nth-child("+(i+1)+")>div:nth-child(2)>p").html(storage.getEString(value,48));
    }
})