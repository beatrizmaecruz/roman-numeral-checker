const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");


const checkInput = () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    } else {
        validateNumber(userInput.value)? displaySuccess() : displayFail();
    }
};

const displaySuccess = () => {
    resultDiv.innerHTML += `<p class="result success">Valid US number: ${userInput.value}</p>`;
}

const displayFail = () => {
    resultDiv.innerHTML += `<p class="result fail">Invalid US number: ${userInput.value}</p>`;
}

const validateNumber = string => {
    const normRegex = /^1?\s?(\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    const bracketRegex = /^1?\s?\((\d{3})\)(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    return string.match(normRegex) || string.match(/^\d{10}$/) || string.match(bracketRegex);
}

const clearResults = () => {
    resultDiv.innerHTML = "";
}

clearBtn.addEventListener("click", clearResults);
checkBtn.addEventListener("click", checkInput);
userInput.addEventListener("keydown", e =>
    {if (e.key == "Enter") {
        console.log("Key button pressed!");
        checkInput();
    }}
);
