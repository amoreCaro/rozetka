import hero from './components/hero';
import modalLogic from './components/modalLogic';
import sidebarLogic from "./components/sidebarLogic";
import setupMegaMenu from "./components/setupMegaMenu";
import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";
import langMenu from "./components/langMenu";


document.addEventListener("DOMContentLoaded", function() {
    hero();
    modalLogic();
    setupMegaMenu();
    sidebarLogic();
    toggleMenuVisibility();
    phoneInput();
    langMenu();
});