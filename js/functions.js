/**
 * Description funzione per creare i bottoni dei numeri e =
 * @param {number} numberToPrint
 * @returns {object} btnElem
 */
function createNumBtn(number) {
    const btnElem = document.createElement("button");

    btnElem.classList.add("num-btn");
    btnElem.innerText = number;

    if (number === 10) {
        btnElem.classList.add("bigger-button");
        btnElem.innerText = "0";
    } else if (number === 11) {
        btnElem.classList.add("orange");
        btnElem.classList.add("t-white");
        btnElem.classList.add("equal")
        btnElem.innerText = "=";
    }

    return btnElem;

};

/**
 * Description funzione per assegnare operatore ad i bottoni e resettare display value
 * 
 */
function handleOperatorClick() {
    console.log(this);
    // Salvo l'operatore
    let operator = this.dataset.operator;
    console.log(operator);
    let firstNum = parseInt(displayValue.innerText);
    displayValue.innerText = 0;
    console.log(operator, firstNum);
};


function handleCalculateClick() {
    console.log("calculate");
    //salvare il secondo operando
    let secondNum = parseInt(displayValue.innerText)
    console.log(firstNum, secondNum, operator);
    //effetuare il calcolo
    let result = calculate(firstNum, secondNum, operator);
    //visualizzare il risultato in alto
    displayValue.innerText = result;
};

/**
 * Description
 * @param {number} first
 * @param {number} second
 * @param {string} operation
 * @returns {number}
 */
function calculate(first, second, operation) {
    let result;
    switch (operation) {
        case "addizione":
            result = first + second;
            break;
        
        case "sottrazione":
            result = first - second;
            break;
        
        case "moltiplicazione":
            result = first * second;
            break;
        
        case "divisione":
            result = first / second;
            break;
    }
    return result;
};

// function reset() {
//     firstNum = 0;
//     operator = "";
//     secondNum = 0;
//     displayValue.innerText = 0;
// }




// function calculate() {
//     let secondNum = parseInt(displayValue.innerHTML);
//     switch (operator) {
//         case "+":
//             displayValue.innerHTML = "" + (firstNum + secondNum);
//             break;

//         case "-":
//             displayValue.innerHTML = "" + (firstNum - secondNum);
//             break;

//         case "x":
//             displayValue.innerHTML = "" + (firstNum * secondNum);
//             break;

//         case "÷":
//             displayValue.innerHTML = "" + (firstNum / secondNum);
//             break;
        
//         default:
//             break;
//     };
// };