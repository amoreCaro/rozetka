// Get all buttons with the class openSidebarBtn
const openSidebarButtons = document.querySelectorAll('.openSidebarBtn');

// Add "click" event to each button
openSidebarButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the sidebar ID from the data-sidebar attribute
    const sidebarId = button.getAttribute('data-sidebar');
    const sidebar = document.getElementById(sidebarId);

    // Check if the sidebar exists
    if (sidebar) {
      sidebar.style.display = 'block'; // Show the sidebar
    }
  });
});

// Close the sidebar
const closeSidebarButtons = document.querySelectorAll('.closeSidebarBtn');
closeSidebarButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Find the nearest sidebar and hide it
    const sidebar = button.closest('.sidebar');
    if (sidebar) {
      sidebar.style.display = 'none'; // Hide the sidebar
    }
  });
});
