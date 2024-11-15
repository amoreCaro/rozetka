import hero from './components/hero';
import sidebar from "./components/sidebar";
import modal from "./components/modal";
import setupMegaMenu from "./components/setupMegaMenu";
import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";

document.addEventListener("DOMContentLoaded", function() {
    hero();
    modal();
    sidebar();
    setupMegaMenu();
    toggleMenuVisibility();
    phoneInput();
});