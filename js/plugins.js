
$(document).ready(function(){

// header height

    $(function(){
        $(".header").height($(window).height());

        $(window).resize(function(){
            $(".header").height($(window).height());
        })

    })


// loading page
    $(window).on('load',function(){
        $('.loading').fadeOut(2000)
    })

// navbar color
    $(window).scroll(function(){
        if($(window).scrollTop() >= 140){
            $('nav').css({
                'backgroundColor' : '#051024',
                'boxShadow' : '2px 2px 2px #040913'
            })
        }else{
            $('nav').css({
                'backgroundColor' : 'transparent',
                'boxShadow' : 'none'
            })
        }
    })

    if($(window).scrollTop() >= 140){
        $('nav').css({
            'backgroundColor' : '#051024',
            'boxShadow' : '2px 2px 2px #040913'
        })
    }else{
        $('nav').css({
            'backgroundColor' : 'transparent',
            'boxShadow' : 'none'
        })
    }


// smooth scroll
    $('nav li a').on('click',function(){

        $('html,body').animate({
            scrollTop : $('#'+ $(this).data('scroll')).offset().top - 80
        },1000)

    })

// add active to links
    $('nav li a').on('click',function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    })

    $(window).scroll(function(){
        $('section').each(function(){
            if ($(window).scrollTop() + 100 >= $(this).offset().top){
                var secID = $(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav li a[data-scroll="'+ secID +'"]').addClass('active')
            }
        })

        //button up
        if ($(window).scrollTop() >=1000){
            $('.up').fadeIn(500)
        }else{
            $('.up').fadeOut(500)
        }
    })
// click on button up

    $('.up').on('click',function(){
        $('html,body').animate({
            scrollTop : 0
        },500)
    })

// nice scroll
    $(function(){
        $('body').niceScroll({
            cursorcolor: '#ff275e',
            cursorwidth: '8px',
            cursorborder: 'none',
            zindex: '99999' 
        });
    })

// swiper slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }
  });

})