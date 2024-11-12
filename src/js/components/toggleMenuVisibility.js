export default function toggleMenuVisibility() {
    const triggers = document.querySelectorAll('.trigger'); // Get all trigger elements
    const hoverBlocks = document.querySelectorAll('.hover-block'); // Get all hover block elements

    triggers.forEach((trigger, index) => {
        const hoverBlock = hoverBlocks[index]; // Get the corresponding hover block for each trigger

        // Debugging: Check if each trigger has a corresponding hoverBlock
        console.log(`Trigger ${index}:`, trigger);
        console.log(`HoverBlock ${index}:`, hoverBlock);

        if (hoverBlock) { // Ensure hoverBlock exists
            trigger.addEventListener('mouseenter', function() {
                hoverBlock.classList.add('isVisible'); // Add the class 'isVisible' to the corresponding hover block
            });

            trigger.addEventListener('mouseleave', function() {
                hoverBlock.classList.remove('isVisible'); // Remove the class 'isVisible' from the corresponding hover block
            });
        } else {
            console.warn(`No hover block found for trigger ${index}`);
        }
    });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', toggleMenuVisibility);