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
    const operator = this.dataset.operator;
    console.log(operator);
    const firstNum = parseInt(displayValue.innerText);
    displayValue.innerText = 0;
    console.log(operator, firstNum);

};


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