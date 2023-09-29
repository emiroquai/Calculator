const display = document.querySelector(`#display`);
const reset = document.querySelector(`#reset`);
const solution = document.querySelector(`#equals`);

let displayValue = 0;
let number1 = null;
let number2 = null;
let operator1 = null;
let result = null;
let newInput = true;



function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 15) {
        display.textContent = displayValue.slice(0,15);
    }
}

reset.addEventListener('click', () => {
    displayValue = 0;
    number1 = null;
    number2 = null;
    result = null;
    newInput = true;
    updateDisplay();
})

solution.addEventListener('click', () => {
    solve();
})

function numberButtons() {
    const numbers = document.querySelectorAll('button.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (newInput == true) {
                displayValue = number.value;
                newInput = false;
            } else {
                displayValue = '' + displayValue + number.value;
            }
            updateDisplay();
            
        })
    })
}

function storeNumbers() {
    if (number2 = null) {
        number1 = displayValue;
    } else if(operator1 != null) {
        number2 = displayValue;
    } else {
        number1 = result;
    }
}

function solve() {
    result = operate (number1, number2, operator1);
    displayValue = result;
    updateDisplay();
}

function operatorButtons() {
    const operators = document.querySelectorAll('button.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            operator1 = operator.value;
            newInput = true;
            if (number1 != null && number2 != null) {
                solve();
            }
        })
    })
}

function operate (number1, number2, op) {
   if (op === 'add') {
    return number1 + number2;
   } else if (op=== 'substract') {
    return number1 - number2;
   } else if (op === 'multiply') {
    return number1 * number2;
   } else if ( op === 'divide') {
    if (number2 === 0) {
        return "LOL";
    } else {
    return number1 / number2;
   }
}
}

updateDisplay();
numberButtons();
operatorButtons();
storeNumbers();