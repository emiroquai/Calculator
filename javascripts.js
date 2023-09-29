const display = document.getElementById('display');
const resetButton = document.getElementById('reset');
const solutionButton = document.getElementById('equals');
const operandButtons = document.querySelectorAll('button.operand');
const operatorButtons = document.querySelectorAll('button.operator');

let displayValue = 0;
let operand1 = null;
let operand2 = null;
let operation1 = null;
let result = null;
let newInput = true;

resetButton.addEventListener('click', reset)
solutionButton.addEventListener('click', solve)

operandButtons.forEach((button) => 
    button.addEventListener('click', () => inputOperand(button.value))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => inputOperator(button.value))
)

function updateDisplay() {
    if (displayValue.length > 15) {
        display.textContent = displayValue.slice(0,15);
    } else {
    display.textContent = displayValue;
    }
}
updateDisplay();

function reset() {
    displayValue = 0;
    operand1 = null;
    operand2 = null;
    result = null;
    newInput = true;
    updateDisplay();
}

function inputOperand(number) {
    if (newInput) {
        displayValue = number;
        newInput = false;
    } else if (number === '.' && displayValue.includes('.')) {
        return;
    } else {
        displayValue += number;
    }
    updateDisplay();
    }
    
function inputOperator(operator) {
    newInput = true;
    if (operand1 === null) {
        operation1 = operator;
        operand1 = Number(displayValue);
    } else {
        solve();
        operation1 = operator;
    }
}
    
function solve() {
    if (operand1 === null || operation1 === null) {
        return;
    }
    operand2 = Number(displayValue);
    result = operate (operand1, operand2, operation1);
    result = Math.round(result * 1000) / 1000;
    displayValue = result;
    updateDisplay();
    operand1 = result;
    newInput = true;
    operation1 = null;
}

function operate (x, y, op) {
   if (op === '+') {
    return x + y;
   } else if (op === '-') {
    return x - y;
   } else if (op === '*') {
    return x * y;
   } else if ( op === '/') {
    if (y === 0) {
        return "LOL";
    } else {
    return x / y;
    }
   }
}

