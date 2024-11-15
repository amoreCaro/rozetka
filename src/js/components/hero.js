export default function Hero() {
    return new Swiper(".hero__slider", {
        spaceBetween: 30,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}