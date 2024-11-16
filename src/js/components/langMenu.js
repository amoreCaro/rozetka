document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.open-lang-menu-btn');
    const langMenuContainer = document.querySelector('.lang-menu-container');
    const buttons = document.querySelectorAll(".lang-menu__item");

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        langMenuContainer.classList.toggle('active'); 
    });

    document.addEventListener('click', (e) => {
        if (!langMenuContainer.contains(e.target) && !toggleBtn.contains(e.target)) {
            langMenuContainer.classList.remove('active'); 
        }
    });

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
