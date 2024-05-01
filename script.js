const calculatorValues = ["CLEAR", "DELETE", "%", 7, 8, 9, "÷", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "=", "+"];
const specialValues = ["DELETE","CLEAR"];

function createCalculator(){
    const calculatorContainer = document.querySelector(".controls");
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
            calculatorButton.classList.add("number-button");
            calculatorButton.addEventListener("click", populateScreen);
            calculatorContainer.appendChild(calculatorButton);
        }
    }
}

function add(a,b){
    let sum = a + b;
    return sum
}

function subtract(a,b){
    let answer = a - b ;
    return answer;
}

function multiply(a,b){
    let product = a * b ;
    return product;
}

function divide(a,b){
    let quotient = a/b ;
    return quotient;
}

let operand = null;
let number1 = null;
let number2 = null;

function operate (operand, number1, number2){
    let answer = null;
    switch (operand){
        case "+":
            answer = add(number1,number2);
            break;
        case "-":
            answer = subtract(number1,number2);
            break;
        case "*":
            answer = multiply(number1,number2);
            break;
        case "÷":
            answer = divide(number1,number2);
            break;
    }

    return answer;
}

function populateScreen(){
    let calculatorScreen = document.querySelector(".screen");
    calculatorScreen.textContent = this.getAttribute("value");
    console.log(calculatorScreen.textContent)
}


document.addEventListener("DOMContentLoaded", () => {

    createCalculator();

} );

