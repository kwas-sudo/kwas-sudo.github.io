document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // WORD COUNTER
    // =========================

    const wordInput = document.getElementById("wordInput");
    const wordCount = document.getElementById("wordCount");
    const charCount = document.getElementById("charCount");

    if (wordInput && wordCount && charCount) {

        wordInput.addEventListener("input", function () {

            const text = wordInput.value;

            // Character count
            charCount.textContent = text.length;

            // Word count
            const trimmedText = text.trim();

            if (trimmedText === "") {
                wordCount.textContent = "0";
            } else {
                wordCount.textContent =
                    trimmedText.split(/\s+/).length;
            }

        });

    }

});


// =========================
// CASE CONVERTER
// =========================

function getCaseInput() {
    return document.getElementById("caseInput");
}


// UPPERCASE
function convertUpper() {

    const input = getCaseInput();

    if (input) {
        input.value = input.value.toUpperCase();
    }

}


// lowercase
function convertLower() {

    const input = getCaseInput();

    if (input) {
        input.value = input.value.toLowerCase();
    }

}


// Title Case
function convertTitle() {

    const input = getCaseInput();

    if (input) {

        input.value = input.value
            .toLowerCase()
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });

    }

}


// Sentence case
function convertSentence() {

    const input = getCaseInput();

    if (input) {

        input.value = input.value
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, function (letter) {
                return letter.toUpperCase();
            });

    }

}


// CLEAR
function clearCaseText() {

    const input = getCaseInput();

    if (input) {
        input.value = "";
    }

}
