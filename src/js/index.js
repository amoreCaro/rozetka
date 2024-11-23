import hero from './components/hero';
import openModal from './components/openModal';
import sidebar from "./components/sidebar";

import setupMegaMenu from "./components/setupMegaMenu";
import toggleMenuVisibility from "./components/toggleMenuVisibility";
import phoneInput from "./components/phoneInput";
import langMenu from "./components/langMenu";


document.addEventListener("DOMContentLoaded", function() {
    hero();
    openModal();
    setupMegaMenu();
    sidebar();
    toggleMenuVisibility();
    phoneInput();
    langMenu();
});