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
    
    langMenuContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Видаляємо клас 'active' у всіх кнопок
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Додаємо клас 'active' до обраної кнопки
            button.classList.add("active");
        });
    });
});