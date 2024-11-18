document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.open-lang-menu-btn');
    const langMenuContainer = document.querySelector('.lang-menu-container');
    const buttons = document.querySelectorAll(".lang-menu__item");

    // Встановлення активної мови з localStorage
    const currentLang = localStorage.getItem("selectedLang") || "UA";
    buttons.forEach((button) => {
        if (button.dataset.lang === currentLang) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Оновлюємо текст кнопки на поточну мову
    updateToggleButtonText(currentLang);

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
            const selectedLang = button.dataset.lang;

            // Зберігаємо вибрану мову
            localStorage.setItem("selectedLang", selectedLang);

            // Оновлюємо текст кнопки на вибрану мову
            updateToggleButtonText(selectedLang);

            // Перезавантажуємо сторінку
            location.reload();
        });
    });

    // Функція для оновлення тексту кнопки
    function updateToggleButtonText(lang) {
        toggleBtn.childNodes[0].textContent = lang + " ";
    }
});
