$(function () {

  $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
  $('.footer__input--masked').mask('+7 (h99) 999-99-99', {
    autoclear: false
  })

  $('.how__input--masked').mask('+7 (h99) 999-99-99', {
    autoclear: false
  })

  $('.modal__input--masked').mask('+7 (h99) 999-99-99', {
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

  const costSlider = new Swiper('.cost__swiper', {

    // Количество слайдов для показа
    slidesPerView: 1,

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
    spaceBetween: 50,

    pagination: {
      el: '.cost__swiper-pagination',
      type: 'bullets',
    },
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

  const costSwiperMoveItems = () => {
    if (window.innerWidth <= 830 && !document.querySelector('.cost__swiper-wrapper .swiper-slide')) {
      const list = document.querySelector('.cost__list');
      const items = list.querySelectorAll('.cost__item:not(.cost__item--translucent)')
      const numberOfSlides = Math.ceil(items.length / 4)

      for (let i = 0; i < numberOfSlides; i++) {
        const slide = document.createElement('div')
        slide.classList.add('swiper-slide', 'cost__swiper-slide')
        const swiperWrapper = document.querySelector('.cost__swiper-wrapper');
        const list = document.createElement('div')
        list.classList.add('cost__list')
        slide.appendChild(list)
        swiperWrapper.appendChild(slide)
      }

      items.forEach((item, idx) => {
        const indexOfSlide = Math.floor(idx / 4)
        const slideList = document.querySelectorAll('.cost__swiper-slide')[indexOfSlide].querySelector('.cost__list');
        slideList.appendChild(item)
      })
    }
  }

  const costBtnQuantitySwitching = () => {
    const btns = document.querySelectorAll('.cost__btn-quantity');
    btns.forEach(btn => {
      btn.addEventListener('click', (i) => {
        btns.forEach(item => {
          item.classList.remove('cost__btn-quantity--active')
        })
        btn.classList.add('cost__btn-quantity--active')
      })
    })
  }

  const completedBtnSwitching = () => {
    const btns = document.querySelectorAll('.completed__list-item');
    btns.forEach(btn => {
      btn.addEventListener('click', (i) => {
        btns.forEach(item => {
          item.classList.remove('completed__list-item--active')
        })
        btn.classList.add('completed__list-item--active')
      })
    })
  }

  const selectEnabling = () => {
    new NativejsSelect({
      selector: '.calculation__group-select',
    });
  }

  const calculateCalculation = () => {
    const price = document.querySelector('.calculation__card-cost span');

    const calculate = () => {
      const values = document.querySelectorAll('.nativejs-select__placeholder-value');
      const length = +values[0].innerHTML.trim().replace(/[^0-9,\s]/g, "")
      const width = +values[1].innerHTML.trim().replace(/[^0-9,\s]/g, "")
      const result = (length * 2 + width * 2) * 10000
      price.innerHTML = result
    }
    const options = document.querySelectorAll('.nativejs-select__option');
    options.forEach(option => {
      option.addEventListener('click', () => {
        calculate()
      })
    })
    calculate()

  }

  const scrollToElements = () => {
    const btns = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('_menu-open')
        html.classList.remove('_menu-open')
        const sectionName = e.target.getAttribute('href');
        let section = null;
        try {
          section = document.querySelector(sectionName);
        } catch {
        }
        if (section) {
          const top = section.getBoundingClientRect()['y'];
          window.scrollTo({
            top: top + window.pageYOffset - header.clientHeight,
            behavior: 'smooth'
          })
        }
      })
    })
  }

  const openModals = () => {
    const btns = document.querySelectorAll('a[data-open-modal]');
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        html.classList.add('_modal-open')
        body.classList.add('_modal-open')
      })
    })

    const closeBtns = document.querySelectorAll('.modal__card-cross, .modal__content');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'modal__card-cross' || e.target.classList[0] == 'modal__content' || e.target.classList[0] == 'modal__card-cross-img') {
          html.classList.remove('_modal-open')
          body.classList.remove('_modal-open')
        }
      })
    })

  }

  window.addEventListener('resize', () => {
    marginHeader()
    costSwiperMoveItems()
  })

  marginHeader();
  openCloseHeaderBurger();
  servicesCards();
  costSwiperMoveItems();
  costBtnQuantitySwitching();
  selectEnabling();
  calculateCalculation();
  completedBtnSwitching();
  scrollToElements();
  openModals();
})
