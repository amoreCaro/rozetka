import hero from './components/hero';
import modalLogic from './components/modalLogic';
import modalSlider from './components/modalSlider';
import sidebarLogic from "./components/sidebarLogic";
import setupMegaMenu from "./components/setupMegaMenu";
// import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";
import langMenu from "./components/langMenu";


document.addEventListener("DOMContentLoaded", function() {
    hero();
    modalLogic();
    modalSlider();
    setupMegaMenu();
    sidebarLogic();
    // toggleMenuVisibility();
    phoneInput();
    langMenu();
});