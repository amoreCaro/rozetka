import hero from './components/hero';
import sidebar from "./components/sidebar";
import modal from "./components/modal";
import openCart from "./components/openCart";
import setupMegaMenu from "./components/setupMegaMenu";
import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";
import langMenu from "./components/langMenu";


document.addEventListener("DOMContentLoaded", function() {
    hero();
    modal();
    openCart();
    setupMegaMenu();
    sidebar();
    toggleMenuVisibility();
    phoneInput();
    langMenu();


});