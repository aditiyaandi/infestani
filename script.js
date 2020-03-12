$(function(){
    var Navbar = $("#Navbar");
    var navBrandBlack = $(".brand-black")
    var navBrandColored = $(".brand-colored")
    feather.replace();

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 20) {
            Navbar.addClass("bg-white navbar-light shadow");
            navBrandBlack.addClass("d-none");
            navBrandColored.removeClass("d-none");
        } else {
            Navbar.removeClass("bg-white shadow");
            navBrandColored.addClass("d-none");
            navBrandBlack.removeClass("d-none");
        }
    });
    $('a[href^="#"]').on('click',function (e) {
        // e.preventDefault();

        var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
         'scrollTop': $target.offset().top- 70
        }, 900, 'swing', function () {
         window.location.hash = target;
        });
    });

});        
