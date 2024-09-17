const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output-box");
const output = document.getElementById("output");

function isValidInput() {
    let num;
    num = number.value;
    if (num < 1 || num > 3999 || !num) {
        giveWarning();
    } else {
        giveResult();
    }
}

function convertToRoman(decimal) {
    const divisors = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let roman = "";
    let remainder = decimal;
    let i = 12;
    while (remainder > 0) {
        roman += symbols[i].repeat(Math.floor(remainder/divisors[i]));
        remainder = remainder%divisors[i];
        i--;
    }
    return roman;
}

function giveWarning() {
    outputBox.classList.remove("success");
    outputBox.classList.add("warning");
    const input = number.value;
    if (!input) {
        output.textContent = "Please enter a valid number"
    } else if (input < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    }  else if (input > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    }
}

function giveResult() {
    outputBox.classList.remove("warning");
    outputBox.classList.add("success");
    output.textContent = `${convertToRoman(number.value)}`;
}

convertBtn.addEventListener("click", isValidInput);
number.addEventListener("keydown", (e) => {if (e.key == "Enter") { isValidInput(); }});