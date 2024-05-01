const calculatorValues = ["CLEAR", "DELETE", "%", 7, 8, 9, "÷", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "=", "+"];
const specialValues = ["DELETE","CLEAR"];
const operands = ["+","-","%","*","÷","="];
const numbers = [0,1,2,3,4,5,6,7,8,9];

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

let operand = "";
let number1 = "";
let number2 = "";

function populateScreen(){

    let calculatorScreen = document.querySelector(".expression");
    let screenContent = calculatorScreen.textContent;
    let answerScreen = document.querySelector(".answers")
    let clickedButton = this.getAttribute("value");
    //console.log(clickedButton);
    //console.table(...screenContent);

    let flag = true;
    
    // Handling the case when the input is a number and theres noting else on the screen
    if (screenContent == 0 && !(operands.includes(clickedButton)) && flag){
        flag = false;
        number1 = clickedButton;
        calculatorScreen.textContent = number1;
    }
    //console.log(screenContent);

    if (operands.includes(clickedButton) && !(screenContent.split('').some(char => operands.includes(char)) && flag)){
        flag = false;
        operand = clickedButton;
        calculatorScreen.textContent += operand
        
    }



    if (operands.includes(clickedButton) && operands.includes(...screenContent) && flag){
        flag = false;
        answer = operate(operand,number1,number2);
        calculatorScreen.textContent = 0;
        answerScreen.textContent = answer;
    }
    
    //Handling the assigment of number 1
    if (!(operands.includes(clickedButton)) && number2 == "" && flag && !(screenContent.split('').some(char => operands.includes(char)))){
        flag = false;
        console.log(number1 + "Eino");
        //console.log(clickedButton);
        number1 += clickedButton;
        //console.log(number1);
        calculatorScreen.textContent = number1;

    }

    // Handling the input of the second number ensuring that only numbers are entered and not another operator then appending the new numbers
    if((screenContent.split('').some(char => operands.includes(char))) && !(operands.includes(clickedButton)) && flag){
        flag = false;
        number2 = clickedButton;
        calculatorScreen.textContent += number2;
    }

    if(clickedButton == "=" && flag){
        flag = false;
        answer = operate(operand,number1,number2);
        answerScreen.textContent = answer;
    }

    if(specialValues.includes(clickedButton) && flag){
        flag = false;
        if (clickedButton == "DELETE"){
            let oldText = calculatorScreen.textContent ;
            let newText = oldText.slice(0,-1);
            calculatorScreen.textContent = newText;
        }
        else if (clickedButton = "CLEAR"){
            calculatorScreen.textContent = 0;
        }
    }



}


document.addEventListener("DOMContentLoaded", () => {

    createCalculator();

} );

