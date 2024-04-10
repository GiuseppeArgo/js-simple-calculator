// Creo i pulsanti di numeri e =

const divNumElem = document.querySelector(".left-col");

for (let i = 1; i <= 11; i++){
    const newNum = createNumBtn(i);
    console.log(newNum);
    divNumElem.append(newNum);
};

// Trovo lo schermo su HTML

const displayValue = document.querySelector(".zero");


// Variabili globali di stato del calcolo

let firstNum = 0;

let secondNum = 0;

let operator = "";

let resultOperation = 0;


// Aggiungo Event Listener ad i numeri

 const numBtns = document.querySelectorAll(".num-btn");

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
    if (displayValue.innerText === "0") {
        displayValue.innerText = this.innerText;
    } else {
        displayValue.innerText += this.innerText;
    }
    });
};

// Aggiungo Event Listener ad gli operatori

const operatorBtns = document.querySelectorAll(".operator-btn")

for (let i = 0; i < operatorBtns.length; i++) {
    const currButton = operatorBtns[i];
    console.log(currButton);
    currButton.addEventListener("click", handleOperatorClick);
}

// Aggiungo Event Listener ad uguale

const calculateBtn = document.querySelector(".equal")

console.log(calculateBtn);

calculateBtn.addEventListener("click", handleCalculateClick)

// Aggiung Event Listener ad C

// const reset = "";










