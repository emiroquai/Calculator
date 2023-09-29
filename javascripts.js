const display = document.querySelector(`#display`);
const resetButton = document.getElementById('reset');
const solutionButton = document.getElementById('equals');
const operandButtons = document.querySelectorAll('button.operand');
const operatorButtons = document.querySelectorAll('button.operator');

let displayValue = 0;
let operand1 = null;
let operand2 = null;
let currentOperation = null;
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
    display.textContent = displayValue;
    if (displayValue.length > 15) {
        display.textContent = displayValue.slice(0,15);
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
    } else {
        displayValue += number;
    }
    updateDisplay();
    }
    
function inputOperator(operator) {
    currentOperation = operator;
    newInput = true;
    if (operand1 === null) {
        operand1 = Number(displayValue);
    } else if (operand1)
        solve();
        // operand1 = result;
    }

    
function solve() {
    if (operand1 === null) {
        return;
    }
    operand2 = Number(displayValue);
    result = operate (operand1, operand2, currentOperation);
    displayValue = result;
    updateDisplay();
    
    currentOperation = null;
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

