import Swiper from 'swiper/bundle';
import '../../scss/components/swiper.scss'; // ваші кастомні стилі

const swiper = new Swiper('.swiper', {
    modules: [Pagination, Navigation],
    speed: 500,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

export default swiper;