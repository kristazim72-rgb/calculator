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
let secondNumber = "";

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

