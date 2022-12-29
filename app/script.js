$(document).ready(function () {
    var currentScrollY;
    let previousScrollTop = 0;
    currentScrollY = window.scrollY;
    if (currentScrollY >= 80) {
        $('.header-ctr').css({
            "opacity": "0",
            "transition": "0s"
        });
    };

    $('#hamburger-toggle').click(function () {
        $(".bar1").toggleClass('bar1Toggle');
        $(".bar2").toggleClass('bar2Toggle');
        $(".bar3").toggleClass('bar3Toggle');
        $('.header-hamburger').toggleClass('header-hamburgerToggle');
        $('.hamburger-link-ctr').toggleClass('hamburger-link-ctrToggle');
        setTimeout(function () {
            $(".rightlink-ctr").toggleClass('rightlink-ctrHide');
        }, 250);
    });

    $('.content').click(function () {
        $(".bar1").removeClass('bar1Toggle');
        $(".bar2").removeClass('bar2Toggle');
        $(".bar3").removeClass('bar3Toggle');
        $('.header-hamburger').removeClass('header-hamburgerToggle');
        $('.hamburger-link-ctr').removeClass('hamburger-link-ctrToggle');
        setTimeout(function () {
            $(".rightlink-ctr").removeClass('rightlink-ctrHide');
        }, 250);
    });

    $(window).scroll(function () {
        $('.header-hamburger').removeClass('header-hamburgerToggle');
        $('.hamburger-link-ctr').removeClass('hamburger-link-ctrToggle');
        $(".bar1").removeClass('bar1Toggle');
        $(".bar2").removeClass('bar2Toggle');
        $(".bar3").removeClass('bar3Toggle');
        setTimeout(function () {
            $(".rightlink-ctr").removeClass('rightlink-ctrHide');
        }, 250);

        currentScrollY = window.scrollY;
        if (currentScrollY >= 80) {
            $('.header-ctr').css({
                "opacity": "0",
                "transition": "0.3s"
            });
            $('#hamburger-toggle').css({
                "cursor": "context-menu"
            });
            $('#hamburger-toggle').off('click');
        };

        const currentScrollTop = $(this).scrollTop();

        if (currentScrollTop < previousScrollTop) {
            // $('.header-ctr').stop();
            $(".header-ctr").css({
                "opacity": "1",
                "transition": "0.3s"
            });
            $('#hamburger-toggle').css({
                "cursor": "pointer"
            });
            $('#hamburger-toggle').on('click', function () {
                $(".bar1").toggleClass('bar1Toggle');
                $(".bar2").toggleClass('bar2Toggle');
                $(".bar3").toggleClass('bar3Toggle');
                $('.header-hamburger').toggleClass('header-hamburgerToggle');
                $('.hamburger-link-ctr').toggleClass('hamburger-link-ctrToggle');
                setTimeout(function () {
                    $(".rightlink-ctr").toggleClass('rightlink-ctrHide');
                }, 250);
            });
            if (currentScrollTop >= 1500) {
                $('.header-ctr').css({
                    "background": "black"
                });
            } else {
                $('.header-ctr').css({
                    "background": "transparent"
                });
            };
        };
        previousScrollTop = currentScrollTop;
    });
});