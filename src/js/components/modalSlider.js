export default function modalSlider() {
  return new Swiper('.modal-slider', {
    loop: true,
    slidesPerView: 4, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      620: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    }
  });
}
