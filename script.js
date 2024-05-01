const calculatorValues = ["CLEAR", "DELETE", "%", 7, 8, 9, "÷", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "=", "+"];
const specialValues = ["DELETE","CLEAR"];

function createCalculator(){
    const calculatorContainer = document.querySelector(".controls");
    console.log(calculatorContainer);
    for(let i of calculatorValues){
        if(specialValues.includes(i)){
            let calculatorButton = document.createElement("button");
            calculatorButton.setAttribute("value",i);
            calculatorButton.textContent = i;
            calculatorButton.classList.add("word-button");
            calculatorContainer.appendChild(calculatorButton);

        }
        else {
            let calculatorButton = document.createElement("button");
            calculatorButton.setAttribute("value",i);
            calculatorButton.textContent = i;
            console.log(calculatorButton.textContent)
            calculatorButton.classList.add("number-button");
            calculatorContainer.appendChild(calculatorButton);
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {

    createCalculator();

} );

