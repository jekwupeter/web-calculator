const display = document.querySelector(".display");
const controlButtons = document.querySelector(".controls").children;
const allSymbols = ['+', '-', 'x', '÷', '%', 'C', '='];
const signedSymbols = ['+', '-'];

let firstValue = '';
let secondValue = '';
let symbol = '';

const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    
    if (symbol === '+') result = firstValue + secondValue
    if (symbol === '-') result = firstValue - secondValue
    if (symbol === 'x') result = firstValue * secondValue
    if (symbol === '÷') result = firstValue / secondValue
    if (symbol === '%') result = firstValue % secondValue

    display.innerText = result
    firstValue = result
    secondValue = ''
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;//destructure button
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if (!secondValue && btnValue === '=') return null;
        if (btnValue === 'C') {
            firstValue = secondValue = symbol = ''
            return display.innerText =''
        } 

        if (firstValue && btnValueIsSymbol) {
            secondValue && calculate() //check for second value then calculate
            symbol = btnValue 
        }

        //if no symbol user is still inputting first value
        else if (!symbol) firstValue += btnValue;
        // check if symbol exist to seprate first value into second
        else if (symbol) secondValue += btnValue;
        
        // To remove = from display
        if (btnValue !== '=') display.innerText += btnValue;
    })
}