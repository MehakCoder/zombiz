$(document).ready(function(){
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
    $('.client-image').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots : false,
        touchDrag:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    
  3. //scroll to top  
  $(window).on('scroll',function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn();
    } else {
        $('.return-to-top').fadeOut();
    }
});
$('.return-to-top').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 100);
    return false;
});
4. //testimonial
$(".testimonial-sliders").owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }    
});

});