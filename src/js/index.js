import modal from "./components/modal";
import sidebar from "./components/sidebar";
import setupMegaMenu from "./components/setupMegaMenu";
import swiper from './components/swiper.js';
import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";

document.addEventListener("DOMContentLoaded", function() {
    modal();
    sidebar();
    setupMegaMenu();
    swiper();
    toggleMenuVisibility();
    phoneInput();

});