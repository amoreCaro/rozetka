document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".lang-menu__item");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Видаляємо клас 'active' у всіх кнопок
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Додаємо клас 'active' до обраної кнопки
            button.classList.add("active");
        });
    });
});