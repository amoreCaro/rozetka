export default function toggleMenuVisibility() {
    const triggers = document.querySelectorAll('.trigger'); // Get all trigger elements
    const hoverBlocks = document.querySelectorAll('.hover-block'); // Get all hover block elements

    triggers.forEach((trigger, index) => {
        const hoverBlock = hoverBlocks[index]; // Get the corresponding hover block for each trigger

        trigger.addEventListener('mouseenter', function() {
            hoverBlock.classList.add('isVisible'); // Add the class 'isVisible' to the corresponding hover block
        });

        trigger.addEventListener('mouseleave', function() {
            hoverBlock.classList.remove('isVisible'); // Remove the class 'isVisible' from the corresponding hover block
        });
    });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', toggleMenuVisibility);