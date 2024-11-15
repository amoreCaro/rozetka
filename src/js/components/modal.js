function modal(modalId, openBtnId, closeBtnId) {
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById(modalId);
        const openModalBtn = document.getElementById(openBtnId);
        const closeModalBtn = document.getElementById(closeBtnId);

        if (!modal) {
            console.error(`Модальное окно с ID "${modalId}" не найдено.`);
            return;
        }
        
        if (openModalBtn) {
            openModalBtn.onclick = () => {
                modal.style.display = "block";
            };
        } else {
            console.error(`Кнопка открытия модалки с ID "${openBtnId}" не найдена.`);
        }

        if (closeModalBtn) {
            closeModalBtn.onclick = () => {
                modal.style.display = "none";
            };
        } else {
            console.error(`Кнопка закрытия модалки с ID "${closeBtnId}" не найдена.`);
        }

        // Закрытие модалки при клике за ее пределами
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });
}

export default modal;
