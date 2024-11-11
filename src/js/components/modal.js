function modal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openModalBtn = document.getElementById(openBtnId);
    const closeModalBtn = document.getElementById(closeBtnId);

    openModalBtn.onclick = () => {
        modal.style.display = "block";
    };

    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === sidebar) {
            modal.style.display = "none";
        }
    };
}

// Initialize the sidebar with specific IDs
modal("modal", "openModalBtn", "closeModalBtn");

export default modal;