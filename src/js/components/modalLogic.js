export default function modalLogic() {
    // Отримуємо всі кнопки для відкриття модалок
    const openModalBtns = document.querySelectorAll('.openModalBtn');
    const closeModalBtns = document.querySelectorAll('.closeModalBtn');
    const overlay = document.querySelector('.overlay');
  
    // Перевірка на існування overlay
    if (!overlay) {
      console.error('Не вдалося знайти overlay');
      return;
    }
  
    // Для кожної кнопки openModalBtn додаємо обробник події
    openModalBtns.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.dataset.modalTarget; // Отримуємо ID модалки з data-атрибута
        const modal = document.querySelector(modalId); // Знаходимо модалку за ID
  
        if (modal) {
          openModal(modal); // Відкриваємо модалку
        } else {
          console.error(`Модалка з ID "${modalId}" не знайдена`);
        }
      });
    });
  
    // Для кожної кнопки closeModalBtn додаємо обробник події
    closeModalBtns.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal'); // Знаходимо найближчий батьківський елемент модалки
        closeModal(modal); // Закриваємо модалку
      });
    });
  
    // Закриття модалки при кліку на overlay (затемнення фону)
    overlay.addEventListener('click', () => {
      const modal = document.querySelector('.modal.active'); // Знаходимо активну модалку
      if (modal) {
        closeModal(modal); // Закриваємо модалку
      }
    });
  
    // Функція для відкриття модалки
    function openModal(modal) {
      modal.classList.add('active'); // Додаємо клас "active" для показу модалки
      overlay.classList.add('active'); // Додаємо клас "active" для показу overlay
    }
  
    // Функція для закриття модалки
    function closeModal(modal) {
      if (modal) {
        modal.classList.remove('active'); // Прибираємо клас "active" для приховування модалки
        overlay.classList.remove('active'); // Прибираємо клас "active" для приховування overlay
      }
    }
}
