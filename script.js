document.addEventListener("DOMContentLoaded", function () {

    const wordInput = document.getElementById("wordInput");
    const wordCount = document.getElementById("wordCount");
    const charCount = document.getElementById("charCount");

    if (!wordInput || !wordCount || !charCount) {
        return;
    }

    wordInput.addEventListener("input", function () {

        const text = wordInput.value;

        // Character count
        charCount.textContent = text.length;

        // Word count
        const trimmedText = text.trim();

        if (trimmedText === "") {
            wordCount.textContent = "0";
        } else {
            wordCount.textContent = trimmedText.split(/\s+/).length;
        }

    });

});
