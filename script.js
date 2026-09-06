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
            charCount.textContent = text.length;

            const trimmedText = text.trim();

            if (trimmedText === "") {
                wordCount.textContent = "0";
            } else {
                wordCount.textContent =
                    trimmedText.split(/\s+/).length;
            }

        });

    }


    // =========================
    // PASSWORD LENGTH SLIDER
    // =========================

    const passwordLength =
        document.getElementById("passwordLength");

    const lengthValue =
        document.getElementById("lengthValue");

    if (passwordLength && lengthValue) {

        lengthValue.textContent = passwordLength.value;

        passwordLength.addEventListener("input", function () {
            lengthValue.textContent = passwordLength.value;
        });

    }

});


// =========================
// CASE CONVERTER
// =========================

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
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });

    }

}

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

function clearCaseText() {

    const input = getCaseInput();

    if (input) {
        input.value = "";
    }

}


// =========================
// PERCENTAGE CALCULATOR
// =========================

function calculatePercentage() {

    const percent =
        parseFloat(document.getElementById("percentValue").value);

    const number =
        parseFloat(document.getElementById("numberValue").value);

    const result =
        document.getElementById("percentageResult");

    if (isNaN(percent) || isNaN(number)) {

        result.textContent =
            "Result: Please enter both numbers.";

        return;
    }

    const answer = (percent / 100) * number;

    result.textContent = "Result: " + answer;

}

function clearPercentage() {

    document.getElementById("percentValue").value = "";

    document.getElementById("numberValue").value = "";

    document.getElementById("percentageResult").textContent =
        "Result: —";

}


// =========================
// PASSWORD GENERATOR
// =========================

function generatePassword() {

    const output =
        document.getElementById("passwordOutput");

    const length =
        parseInt(document.getElementById("passwordLength").value);

    const includeUpper =
        document.getElementById("includeUpper").checked;

    const includeNumbers =
        document.getElementById("includeNumbers").checked;

    const includeSymbols =
        document.getElementById("includeSymbols").checked;


    let characters =
        "abcdefghijklmnopqrstuvwxyz";

    if (includeUpper) {
        characters +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumbers) {
        characters +=
            "0123456789";
    }

    if (includeSymbols) {
        characters +=
            "!@#$%^&*()_+-=[]{}";
    }


    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters.charAt(randomIndex);

    }

    output.value = password;

}


function copyPassword() {

    const output =
        document.getElementById("passwordOutput");

    if (!output || output.value === "") {
        return;
    }

    navigator.clipboard.writeText(output.value)
        .then(function () {

            alert("Password copied!");

        })
        .catch(function () {

            output.select();
            document.execCommand("copy");

            alert("Password copied!");

        });

}
