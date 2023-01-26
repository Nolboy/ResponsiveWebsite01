$(document).ready(function () {
    var currentScrollY;
    let previousScrollTop = 0;
    currentScrollY = window.scrollY;
    if (currentScrollY >= 80) {
        $('.header-ctr').css({
            "opacity": "0",
            "transition": "0s"
        });
        $('.hamburger-ctr').css({
            "opacity": "0",
            "transition": "0s"
        });
    };

    $('.inner-link-p1').css({
        "opacity": "1",
        "transition": "1s"
    });

    $('.inner-link-ctr-header1').css({
        "marginTop": "8px",
        "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
    });

    $('.inner-link-ctr-button1').css({
        "marginTop": "25px",
        "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
    });

    $('#hamburger-toggle').click(function () {
        $(".bar1").toggleClass('bar1Toggle');
        $(".bar2").toggleClass('bar2Toggle');
        $(".bar3").toggleClass('bar3Toggle');
        $('.header-hamburger').toggleClass('header-hamburgerToggle');
        $('.hamburger-link-ctr').toggleClass('hamburger-link-ctrToggle');
        $('.hamburger-hide').css({
            "display": "inline-block"
        });
        setTimeout(function () {
            $(".rightlink-ctr").toggleClass('rightlink-ctrHide');
        }, 250);
    });

    $('#hamburger-toggle1').click(function () {
        $(".bar1").toggleClass('bar1Toggle');
        $(".bar2").toggleClass('bar2Toggle');
        $(".bar3").toggleClass('bar3Toggle');
        $('.header-hamburger').toggleClass('header-hamburgerToggle');
        $('.hamburger-link-ctr').toggleClass('hamburger-link-ctrToggle');
        $('.hamburger-hide').css({
            "display": "none"
        });
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
        $('.hamburger-hide').css({
            "display": "none"
        })
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
            $('.hamburger-ctr').css({
                "opacity": "0",
                "transition": "0.3s"
            });
            $('#hamburger-toggle').off('click');
        };

        const currentScrollTop = $(this).scrollTop();

        if (currentScrollTop >= 850) {
            $('.inner-link-ctr-header2').css({
                "marginTop": "8px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
            $('.inner-link-ctr-button2').css({
                "marginTop": "25px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
        };

        if (currentScrollTop >= 1800) {
            $('.inner-link-ctr-header3').css({
                "marginTop": "8px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
            $('.inner-link-ctr-button3').css({
                "marginTop": "25px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
        };

        if (currentScrollTop >= 2730) {
            $('.inner-link-ctr-header4').css({
                "marginTop": "8px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
            $('.inner-link-ctr-button4').css({
                "marginTop": "25px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
        }

        if (currentScrollTop >= 3500) {
            $('.inner-link-ctr-header5').css({
                "marginTop": "8px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
            $('.inner-link-ctr-button5').css({
                "marginTop": "25px",
                "transition": "1s cubic-bezier(0.1, 0.1, 0, 1)"
            });
        }



        if (currentScrollTop < previousScrollTop) {
            $(".header-ctr").css({
                "opacity": "1",
                "transition": "0.3s"
            });
            $('.hamburger-ctr').css({
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
                $('.hamburger-hide').css({
                    'display': 'inline-block'
                })
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