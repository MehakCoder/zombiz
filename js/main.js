$(document).ready(function () {
    1.   // counter
    $(document).ready(function () {
        $('.counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    $(window).on('load', function () {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    });

    2.  // logo
    $('#client').owlCarousel({
        items: 5,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            415: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

3. //scroll to top  
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn();
    } else {
        $('.return-to-top').fadeOut();
    }
});
$('.return-to-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
    return false;
});
4. //testimonial
$("#testimonial-sliders").owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
5.//team
$("#team-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    touchDrag:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$("#team-carousel-1").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    touchDrag:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$("#team-carousel-2").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    touchDrag:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
6.//slider
$(".Banner-inner").owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    navSpeed:2,
    dots:false,
    autoplay:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// 7.//Sticky
// window.onscroll = function() {myFunction()};

// var Menu = document.getElementsByClassName("Menu");
// var sticky = Menu.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     Menu.classList.add("sticky")
//   } else {
//     Menu.classList.remove("sticky");
//   }
// }



