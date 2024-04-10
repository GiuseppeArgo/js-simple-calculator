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

const firstNum = 0;

const secondNum = 0;

const operator = "";

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

const reset


// const operatorBtns = document.querySelectorAll(".operator");

// for (let i = 0; i < operatorBtns.length; i++) {
//     operatorBtns[i].addEventListener("click", operators)
//     console.log(firstNum);
// };








