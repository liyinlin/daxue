/**
 * Created by cz on 2016/11/15.
 */
$(function () {
    new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
    } );
})