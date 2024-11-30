export default function modalSlider() {
return new Swiper('.modal-slider', {
    slidesPerView: 4, 
    spaceBetween: 16, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}