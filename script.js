const wordInput = document.getElementById("wordInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

wordInput.addEventListener("input", function () {

    const text = wordInput.value;

    // Count characters
    charCount.textContent = text.length;

    // Count words
    const words = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    wordCount.textContent = words.length;
});
