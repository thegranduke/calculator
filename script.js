const calculatorValues = ["CLEAR", "DELETE", "%", 7, 8, 9, "÷", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "=", "+"];
const specialValues = ["DELETE","CLEAR"];
const operands = ["+","-","%","*","÷","="];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const specialOperands = [".","=","%"];
function createCalculator(){
    const calculatorContainer = document.querySelector(".controls");
    for(let i of calculatorValues){
        if(specialValues.includes(i)){
            let calculatorButton = document.createElement("button");
            calculatorButton.setAttribute("value",i);
            calculatorButton.textContent = i;
            calculatorButton.classList.add("word-button");
            calculatorButton.addEventListener("click", clearScreen);
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
            answer = add(+number1,+number2);
            break;
        case "-":
            answer = subtract(+number1,+number2);
            break;
        case "*":
            answer = multiply(+number1,+number2);
            break;
        case "÷":
            answer = divide(+number1,+number2);
            break;
    }

    return answer;
}



let operand = "";
let number1 = "";
let number2 = "";

function populateScreen(){

    function screenIncludesOperand(){
        let verdict = screenContent.split('').some(char => operands.includes(char));
        return verdict;
    
    }
    
    function isaNumber(){
        return numbers.includes(clickedButton);
    }
    
    function isOperand(){
        return operands.includes(clickedButton);
    }

    function isSpecialOperand(){
        return specialOperands.includes(clickedButton)
    }

    let calculatorScreen = document.querySelector(".expression");
    let screenContent = calculatorScreen.textContent;
    let answerScreen = document.querySelector(".answers")
    let clickedButton = this.getAttribute("value");

    let flag = true;

    
    // Handling the case when the input is a number and theres noting else on the screen
    if (screenContent == 0 && isaNumber() && flag){
        flag = false;
        number1 = clickedButton;
        calculatorScreen.textContent = number1;
    }
    // //Handling the case of an specialOperand being entered before any other numbers 
    // if (screenContent == 0 && isSpecialOperand() && flag){
    //     flag = false;
    // }

    // Handling the addition of the operand to the expression after making sure there are not other operands 
    if ( isOperand() && !(screenIncludesOperand()) &&  !(isSpecialOperand()) && flag){
        flag = false;
        operand = clickedButton;

        if (screenContent == 0){
            (answerScreen.textContent)
            ? number1 = answerScreen.textContent
            : number1 = 0;
            calculatorScreen.textContent = number1 + operand;

        }
        else{
            calculatorScreen.textContent += operand
        }
        
    }

    //Handling the assigment of number 1
    if ( isaNumber() && !(screenIncludesOperand()) && flag){
        flag = false;
        number1 += clickedButton;
        calculatorScreen.textContent = number1;
    }

    //Handling the assignment of number 2 
    if ( isaNumber() && (screenIncludesOperand()) && flag){
        flag = false;
        number2 += clickedButton;
        calculatorScreen.textContent += clickedButton;
    }


    // Handling the situation when an operand is clicked but theres already another operand on the screen and no second number
    if (isOperand() && screenIncludesOperand() && (number2 != "") && !(isSpecialOperand()) && flag){
        flag = false;
        answer = operate(operand,number1,number2);
        console.log(answer);
        operand = clickedButton;
        calculatorScreen.textContent = answer + operand;
        number1 = answer;
        number2 = "";
        console.log(answer);
        answerScreen.textContent = answer;
       
    }

    // Handling the clicking of the = button
    if(clickedButton == "=" && flag){
        flag = false;
        answer = operate(operand,number1,number2);
        answerScreen.textContent = answer;
        calculatorScreen.textContent = 0;
        number1 = "";
        number2 = "";
        
    }

    //Handling the use of the percent operater
    if (clickedButton == "%" && flag){
        if (!(number2 == "")){
            let length = number2.toString().length;
            number2 = number2/100;
            console.log(length);
            calculatorScreen.textContent = calculatorScreen.textContent.slice(0,-(length));
            console.log(calculatorScreen.textContent);
            calculatorScreen.textContent += number2;
        }
        else if (!(number1 == "")){
            number1 = number1/100;
            console.log(number1);
            calculatorScreen.textContent = number1;
        }
        

    }


}

function clearScreen(){

    let calculatorScreen = document.querySelector(".expression");
    let answerScreen = document.querySelector(".answers")
    let clickedButton = this.getAttribute("value");

    if (clickedButton == "DELETE"){
        let oldText = calculatorScreen.textContent ;
        let newText = oldText.slice(0,-1);
        (newText == "") ? newText = 0 :undefined;
        calculatorScreen.textContent = newText;
        //Updating number variables
        if (!(number2 == "")){
            let temp = number2.toString().slice(0,-1);
            number2 = +temp;

        }
        else if (!(number1 == "") && !(screenIncludesOperand())){
            let temp = number1.toString().slice(0,-1);
            number1 = +temp;
        }

    }
    else if (clickedButton = "CLEAR"){
        calculatorScreen.textContent = 0;
        answerScreen.textContent = "";
        number1 = "";
        number2 = "";
    }
    
}


document.addEventListener("DOMContentLoaded", () => {

    createCalculator();

} );

