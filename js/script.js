// Creo i pulsanti di numeri e =

const divNumElem = document.querySelector(".left-col");

for (let i = 1; i <= 11; i++){
    const newNum = createNumBtn(i);
    console.log(newNum);
    divNumElem.append(newNum);
};

// Trovo lo schermo su HTML

const displayValue = document.querySelector(".zero");


// Salvo i numeri e gli operatori in una variabile

let firstNum = 0;

let secondNum = 0;

let operator = "";

let resultOperation = 0;


// Aggiungo Event Listener ad i numeri

const numBtns = document.querySelectorAll(".num-btn");

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        displayValue.innerText += this.innerText;
        console.log(firstNum);
    });
};

// Aggiungo Event Listener ad gli operatori

const operatorBtns = document.querySelectorAll(".operator");

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", operators)
    if (operatorBtns.innerHTML === "=") {
        operatorBtns[i].addEventListener("click", calculate)
    };
};








