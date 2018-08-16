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

$(document).ready(function(e) {
    if(screen.width >= 769)
    {
        $(".dropdown").hover(function(){
            $('.nav-ul.active');
            $(".dropdownmenu").toggleClass("open");
        });
        $(".dropdown1").hover(function(){
            $('.nav-ul.active');
            $(".dropdownmenu1").toggleClass("open");
        });
        $(".dropdown2").hover(function(){
            $('.nav-ul.active');
            $(".dropdownmenu2").toggleClass("open");
        });
    }

    if(screen.width <= 768)
    {
        $('.menu_btn').click(function(){
            $('.nav-ul').toggleClass('active');
            $('.baars').toggleClass('cross');
            // $(".dropdownmenu").slideUp();
            // $(".dropdownmenu1").slideUp();
            // $(".dropdownmenu2").slideUp();

        });

        $(".dropdown").click(function(){
            $(".dropdownmenu").slideToggle();
        });
        $(".dropdown1").click(function(){
            $(".dropdownmenu1").slideToggle();
        });
        $(".dropdown2").click(function(){
            $(".dropdownmenu2").slideToggle();
        });


        $('.nav-ul').click(function(e) {
            if( !$(e.target).hasClass('dropdownlink') )
            {
                $(".nav-ul.active").toggleClass("active");
                $('.baars.cross').toggleClass('cross');
                $(".dropdownmenu").slideUp();
                $(".dropdownmenu1").slideUp();
                $(".dropdownmenu2").slideUp();
            }
        });

    }

});

// tinymce.init({
//     selector: "textarea",
//     plugins: "a11ychecker, advcode, linkchecker, media mediaembed, powerpaste, tinycomments, tinymcespellchecker",
//     toolbar: "a11ycheck, code, tinycomments"
// });

