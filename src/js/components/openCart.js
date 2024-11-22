//     const modal = document.getElementById("cart");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

// Відкриваємо модальне вікно при натисканні на кнопку
openCartBtn.onclick = function() {
    cart.style.display = "block";
}

// Закриваємо модальне вікно при натисканні на кнопку закриття
closeCartBtn.onclick = function() {
    cart.style.display = "none";
}

// Закриваємо модалку при натисканні поза її межами
window.onclick = function(event) {
    if (event.target === cart) {
        cart.style.display = "none";
    }
}