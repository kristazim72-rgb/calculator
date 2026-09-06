function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) return "Snarky error!";
    return a / b;
};

let firstNum = "";
let operator = null;
let secondNum = "";

function operate(option, a, b){
    a =Number(a);
    b =Number(b);
    switch (option) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return null;
    }
}

//populates display button clicks
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".btn-num");

let shouldResetScreen = false;

function appendNum(num){
    if (num === "." && display.textContent.includes(".")) return;

    if(display.textContent === "0" || shouldResetScreen){
        display.textContent = "";
        shouldResetScreen = false;
    }
    display.textContent += num;
}

numButtons.forEach(button => {
    button.addEventListener("click", () => appendNum(button.textContent));
});

//stores operands and the handle operations
const operatorButtons = document.querySelectorAll(".btn-operator");

function setOperator(newOperator) {
    if (operator !== null) evaluate();
    firstNum = display.textContent;
    operator = newOperator;
    shouldResetScreen = true;
}

operatorButtons.forEach(button => {
    button.addEventListener("click", () => setOperator(button.dataset.op));
});

//implements evaluation and rounding off
const equalsButton = document.querySelector(".btn-equals");

function evaluate() {
    if (operator === null || shouldResetScreen) return;
    
    secondNum = display.textContent;
    const result = operate(operator, firstNum, secondNum);

    if (typeof result === "number") {
        display.textContent = Math.round(result * 1000) / 1000;
    } else {
        display.textContent = result;
    }

    operator = null; 
}

equalsButton.addEventListener("click", evaluate);

//adds the clear and delete controls
const clearButton = document.querySelector(".btn-clear");
const deleteButton = document.querySelector(".btn-delete");

function clearAll() {
    display.textContent = "0";
    firstNum = "";
    secondNum = "";
    operator = null;
    shouldResetScreen = false;
}

function deleteDigit() {
    if (shouldResetScreen) return;
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") display.textContent = "0";
}

clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteDigit);


