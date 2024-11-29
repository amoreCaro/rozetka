export default function modalSlider() {
return new Swiper('.modal-slider', {
    slidesPerView: 4, // По 4 картки в ряд
    spaceBetween: 16, // Відступи між картками
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}