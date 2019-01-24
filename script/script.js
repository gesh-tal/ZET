
   $('.popup_menu').css('display', 'none');

$(document).ready(function(){


  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 500);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });

  $('.menu img').on('click', function(){
    $('.popup_menu').fadeToggle();
  });

  $('.popup_menu a').on('click', function() {
    $('.popup_menu').fadeOut();
  })

  $(".owl-carousel").owlCarousel({
    items : 1,
    autoPlay: 3000,
    stopOnHover: true
  });
});