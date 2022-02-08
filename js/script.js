// DOM Selection
let nameInput = document.getElementById("name-input");
let limitValue = document.getElementById("limit-value");
const buttonValue = document.getElementById("button-value");

// Show the limit value changing
limitValue.innerText = 50;
function setLimit() {

    let rangeValue = document.getElementById("limit").value;

    limitValue.innerText = rangeValue
}

// Use the button to do something -> event
// When clicked -> Show name and number in #name-value and #number-value
function setWinner() {

    if(nameInput.value === "") {
        alert("Por favor, insira seu nome para prosseguir!")
    } else {
        document.getElementById("name-value").innerText = nameInput.value;
        nameInput.value = "";

        numberWinner();
    }
}

// Randomizer
function numberWinner() {

    let rangeValue = document.getElementById("limit").value;
    let numberValue = document.getElementById("number-value");

    numberValue.innerText = Math.round(Math.random() * rangeValue)
}