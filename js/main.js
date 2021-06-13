$(function () {

  $('.header__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__list-link').on('click', function () {
      $('.menu__list').removeClass('menu__list--active');
    });
  });

  $('.team__items').slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1467,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.student__items').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $(".menu a, .footer__arrow").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // $(window).scroll(function () {
  //   var top = $(document).scrollTop();
  //   if (top < 500) $(".header__wrapper").css({ top: '0', position: 'relative', background: 'transparent' });
  //   else $(".header__wrapper").css({ top: '0', position: 'fixed', background: 'rgba(0, 0, 0, 0.7)'});
  // });

});

