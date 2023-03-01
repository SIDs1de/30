$(function () {

  $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
  $('.footer__input--masked').mask('+7 (h99) 999-99-99', {
    autoclear: false
  })

  const openCloseHeaderBurger = () => {
    const headerBurgerBtn = document.querySelector('.header__burger');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    headerBurgerBtn.addEventListener('click', () => {
      body.classList.toggle('_menu-open')
      html.classList.toggle('_menu-open')
    })
  }

  const servicesSlider = new Swiper('.services__swiper', {

    // Количество слайдов для показа
    slidesPerView: 1,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },

    allowTouchMove: false,

    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },

    breakpoints: {
      1080: {
        slidesPerView: 2,
        // Управление клавиатурой
        keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить только когда слайдер в пределах вьюпорта
          onlyInViewport: true,
          // Включить\выключить управление клавишами pageUp, pageDown
          pageUpDown: true,
        },
        // Скорость
        speed: 800,
        grabCursor: true,

        spaceBetween: 10,

        allowTouchMove: true,

        // effect: 'slide',

        // fadeEffect: {
        //   crossFade: false
        // },
      }
    }
  });

  const completedSlider = new Swiper('.completed__swiper', {

    // Количество слайдов для показа
    slidesPerView: 1.1,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    grabCursor: true,
    spaceBetween: 10,

    navigation: {
      nextEl: '.completed__swiper-button-next',
      prevEl: '.completed__swiper-button-prev',
    },

    breakpoints: {
      500: {
        slidesPerView: 1.65,
      }
    }
  });

  const servicesCards = () => {
    const items = $('.services__card').click(function () {
      const index = items.index(this);

      items.removeClass('services__card--active')
      this.classList.add('services__card--active')

      $('.services__swiper').addClass('_non-visible')

      setTimeout(() => {
        servicesSlider.slideTo(index, 0)
        $('.services__swiper').removeClass('_non-visible')
      }, 200)

    });
  }

  const marginHeader = () => {
    const header = document.querySelector('.header');
    const firstSection = document.querySelector('section');
    const headerHeight = header.clientHeight;
    firstSection.style.marginTop = headerHeight + 'px';
  }

  window.addEventListener('resize', () => {
    marginHeader()
  })

  marginHeader()
  openCloseHeaderBurger();
  servicesCards();
})
