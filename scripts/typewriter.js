const speed = 25; // Typing speed in milliseconds

function typeOutOneByOne(elements, index = 0) {
    if (index >= elements.length) return; // Stop when all elements are done

    const element = elements[index];
    const text = element.dataset.originalText; // Retrieve the pre-saved text
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, speed);
        } else {
            // Move to the next element after the current one finishes
            typeOutOneByOne(elements, index + 1);
        }
    }

    type();
}

// Get all elements with the class "typewriter"
const elements = document.querySelectorAll(".typewriter");

// Save original text and clear all elements
elements.forEach((element) => {
    element.dataset.originalText = element.textContent.trim(); // Save original text
    element.textContent = ""; // Clear the text
});

// Start typing them out one by one
typeOutOneByOne(elements);
