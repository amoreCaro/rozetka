function modal(modalId, openBtnId, closeBtnId) {
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById(modalId);
        const openModalBtn = document.getElementById(openBtnId);
        const closeModalBtn = document.getElementById(closeBtnId);

        // Open modal when the open button is clicked
        openModalBtn.onclick = () => {
            modal.style.display = "block";
        };

        // Close modal when the close button is clicked
        closeModalBtn.onclick = () => {
            modal.style.display = "none";
        };

        // Close modal when clicking outside of it
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });
}

export default modal;
