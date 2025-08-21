// Get display and result input fields
const input = document.getElementById('number-input');
const result = document.getElementById('result');

// Handle button click
function handleClickButton(el) {
    const value = el.innerText;

    // Prevent multiple operators in a row
    const operators = ['-', '+', '*', '/', '%'];

    const lastChar = input.value.slice(-1);

    if (operators.includes(value)) {
        // Don't allow operator at beginning
        if (input.value === '') return;

        // Don't allow two operators in a row
        if (operators.includes(lastChar)) return;
    }

    // Only one dot per number section
    if (value === '.') {
        const parts = input.value.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) return;
    }

    input.value += value;
}

// Handle clear button
function reset() {
    input.value = '';
    result.value = '';
}

// Delete the last character
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

