window.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const resetBtn = document.getElementById('resetBtn');
    const originalItems = Array.from(container1.children); // Store the original items
    console.log(originalItems)

    let draggedItem = null;

    // Drag start event listener
    container1.addEventListener('dragstart', (event) => {
        draggedItem = event.target;
        // Add a class to change the appearance of the dragged item
        event.target.classList.add('dragged');
    });

    // Drag end event listener
    container1.addEventListener('dragend', (event) => {
        // Remove the class added during drag start
        event.target.classList.remove('dragged');
    });

    // Drag over event listener
    container2.addEventListener('dragover', (event) => {
        event.preventDefault(); // Allow drop
    });

    // Drop event listener
    container2.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default behavior

        // Append the dragged item to container2
        container2.appendChild(draggedItem);
        draggedItem = null;

        // Display success message
        let successMessage = document.getElementById('successMessage');
        if (!successMessage) {
            successMessage = document.createElement('p');
            successMessage.id = 'successMessage';
            successMessage.textContent = 'Item dropped successfully!';
            container2.parentNode.insertBefore(successMessage, container2.nextSibling);
        }
    });

    // Reset button event listener
    resetBtn.addEventListener('click', () => {
        // Clear container2
        container2.innerHTML = '';
        // Restore the original items to container1
        originalItems.forEach(item => 
            container1.appendChild(item));

        // Remove success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.remove();
        }
    });
});
