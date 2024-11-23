 // Отримуємо всі кнопки з класом openModalBtn
 const openModalButtons = document.querySelectorAll('.openModalBtn');
    
 // Додаємо подію "клік" для кожної кнопки
 openModalButtons.forEach((button) => {
   button.addEventListener('click', () => {
     // Отримуємо ID модального вікна з атрибута data-modal
     const modalId = button.getAttribute('data-modal');
     const modal = document.getElementById(modalId);
 
     // Перевіряємо, чи модальне вікно існує
     if (modal) {
       modal.style.display = 'block';
     }
   });
 });
 
 // Закриття модального вікна
 const closeModalButtons = document.querySelectorAll('.closeModalBtn');
 closeModalButtons.forEach((button) => {
   button.addEventListener('click', () => {
     // Знаходимо найближче модальне вікно та приховуємо його
     const modal = button.closest('.modal');
     if (modal) {
       modal.style.display = 'none';
     }
   });
 });