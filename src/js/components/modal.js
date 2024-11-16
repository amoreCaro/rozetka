//     const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Відкриваємо модальне вікно при натисканні на кнопку
openModalBtn.onclick = function() {
modal.style.display = "block";
}

// Закриваємо модальне вікно при натисканні на кнопку закриття
closeModalBtn.onclick = function() {
modal.style.display = "none";
}

// Закриваємо модалку при натисканні поза її межами
window.onclick = function(event) {
if (event.target === modal) {
    modal.style.display = "none";
}
}
