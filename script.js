
const input = document.getElementById('number-input');
const result = document.getElementById('result');


function handleClickButton(el) {
    const value = el.innerText;

    
    const operators = ['-', '+', '*', '/', '%'];

    const lastChar = input.value.slice(-1);

    if (operators.includes(value)) {
        
        if (input.value === '') return;

        
        if (operators.includes(lastChar)) return;
    }

    
    if (value === '.') {
        const parts = input.value.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) return;
    }

    input.value += value;
}


function reset() {
    input.value = '';
    result.value = '';
}

function deleteLast() {
    input.value = input.value.slice(0, -1);
}

// Final calculation
function calculate() {
    try {
        let expression = input.value;

        // Convert % into actual percentage logic
        expression = expression.replace(/%/g, '/100');

        // Evaluate safely
        const ans = Function('"use strict"; return (' + expression + ')')();

        result.value = ans;
    } catch (error) {
        result.value = 'Error';
    }
}









