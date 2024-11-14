function modal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openModalBtn = document.getElementById(openBtnId);
    const closeModalBtn = document.getElementById(closeBtnId);

    if (openModalBtn) {
        openModalBtn.onclick = () => {
            if (modal) modal.style.display = "block";
        };
    }

    if (closeModalBtn) {
        closeModalBtn.onclick = () => {
            if (modal) modal.style.display = "none";
        };
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

export default modal;