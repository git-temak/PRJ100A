const output = document.getElementById('output');

function appendToOutput(value) {
    output.value += value;
}

function performOperation(operator) {
    output.value += operator;
}

function calculateResult() {
    var result = eval(output.value);
    output.value = parseFloat(result.toFixed(2));
}