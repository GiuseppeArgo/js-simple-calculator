/**
 * Description funzione per creare i bottoni dei numeri e =
 * @param {number} numberToPrint
 * @returns {object} divElem
 */
function createNumBtn(number) {
    const divElem = document.createElement("button");
    
    divElem.classList.add("num-btn");
    divElem.innerText = number;

    if (number === 10) {
        divElem.classList.add("bigger-button");
        divElem.innerText = "0";
    } else if (number === 11) {
        divElem.classList.add("orange");
        divElem.classList.add("t-white");
        divElem.innerText = "=";
    }

    return divElem;

};


