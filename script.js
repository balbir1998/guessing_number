const form = document.querySelector("form");
const inputNum = document.getElementById("number");
const submitBtn = document.querySelector(".submit-btn")
const result = document.querySelector(".result");
const startBtn = document.querySelector(".start-btn");
const allGuesses = document.querySelector(".all-guesses");

let gussingNum = Math.floor(Math.random() * 100) + 1;
const gussingNumArr = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (gussingNumArr.length === 10) {
        result.innerText = `You lost! The number was ${gussingNum}`;
        submitBtn.disabled = true;
        inputNum.disabled = true;
        startBtn.disabled = false;
        form.reset();
        return;
    }

    if (inputNum.valueAsNumber > gussingNum) {
        result.innerText = "To High!"
    } else if (inputNum.valueAsNumber < gussingNum) {
        result.innerText = "To Low!"
    } else {
        result.innerText = "You got it! Congrats";
        submitBtn.disabled = true;
        inputNum.disabled = true;
        startBtn.disabled = false;
    }

    gussingNumArr.push(inputNum.value);
    allGuesses.innerText = `Your guesses: ${gussingNumArr.join(",  ")}`
    inputNum.focus();
    form.reset();
});

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    inputNum.disabled = false;
    submitBtn.disabled = false;
    inputNum.focus();
    result.innerText = "";
    allGuesses.innerText = "";
    gussingNumArr.splice(0);
    gussingNum = Math.floor(Math.random() * 101);
});