// Creo i pulsanti di numeri e =

const divNumElem = document.querySelector(".left-col");

for (let i = 1; i <= 11; i++){
    const newNum = createNumBtn(i);
    console.log(newNum);
    divNumElem.append(newNum);
};

// Trovo lo schermo su HTML

const displayValue = document.querySelector(".zero");

const numBtns = document.querySelectorAll(".num-btn");

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        displayValue.innerText += this.innerText;
    });
};








