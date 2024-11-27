export default function sidebarLogic() {
  // Get all buttons that open the sidebar
  const openSidebarBtns = document.querySelectorAll('.openSidebarBtn');
  const closeSidebarBtns = document.querySelectorAll('.closeSidebarBtn');
  const overlay = document.querySelector('.overlay');

  // Check if overlay exists
  if (!overlay) {
    console.error('Overlay element not found');
    return;
  }

  // Open sidebar logic
  openSidebarBtns.forEach(button => {
    button.addEventListener('click', () => {
      const sidebarId = button.dataset.sidebarTarget; // Get the sidebar selector (ID) from data-attribute
      const sidebar = document.querySelector(sidebarId); // Find the sidebar using querySelector

      if (sidebar) {
        openSidebar(sidebar); // Open the sidebar
      } else {
        console.error(`Sidebar with selector "${sidebarId}" not found`);
      }
    });
  });

  // Close sidebar logic
  closeSidebarBtns.forEach(button => {
    button.addEventListener('click', () => {
      const sidebar = button.closest('.sidebar'); // Find the closest sidebar element
      closeSidebar(sidebar); // Close the sidebar
    });
  });

  // Close sidebar when clicking on overlay (background dimming)
  overlay.addEventListener('click', () => {
    const activeSidebar = document.querySelector('.sidebar.active'); // Find the active sidebar
    if (activeSidebar) {
      closeSidebar(activeSidebar); // Close the active sidebar
    }
  });

  // Function to open sidebar
  function openSidebar(sidebar) {
    sidebar.classList.add('active'); // Add "active" class to show the sidebar
    overlay.classList.add('active'); // Show the overlay
  }

  // Function to close sidebar
  function closeSidebar(sidebar) {
    if (sidebar) {
      sidebar.classList.remove('active'); // Remove "active" class to hide the sidebar
      overlay.classList.remove('active'); // Hide the overlay
    }
  }
}