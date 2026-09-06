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

    }); // CASE CONVERTER

function getCaseInput() {
    return document.getElementById("caseInput");
}

function convertUpper() {
    const input = getCaseInput();

    if (input) {
        input.value = input.value.toUpperCase();
    }
}

function convertLower() {
    const input = getCaseInput();

    if (input) {
        input.value = input.value.toLowerCase();
    }
}

function convertTitle() {
    const input = getCaseInput();

    if (input) {
        input.value = input.value
            .toLowerCase()
            .replace(/\b\w/g, function(letter) {
                return letter.toUpperCase();
            });
    }
}

function convertSentence() {
    const input = getCaseInput();

    if (input) {
        input.value = input.value
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, function(letter) {
                return letter.toUpperCase();
            });
    }
}

function clearCaseText() {
    const input = getCaseInput();

    if (input) {
        input.value = "";
    }
}

});
