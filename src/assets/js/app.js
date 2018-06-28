//sidebar header phone
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#mobile-search').on('click', function() {
        $('#search').toggle('.search');
    })

});

// Animation web header
$(function(){
    var shrinkHeader = 300;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.cbp-af-header').addClass('shrink');
        }
        else {
            $('.cbp-af-header').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
