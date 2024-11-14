export default function Hero() {
    return new Swiper(".hero__slider", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}