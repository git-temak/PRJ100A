const output = document.getElementById('output');

function processBtn(value) {
    output.value += value;
}

function calculateResult() {
    try {
        let result = eval(output.value);
        let finalRes = parseFloat(result.toFixed(10));
        if (isNaN(finalRes) || !isFinite(finalRes)) {
            throw new Error('Invalid calculation');
        }
        output.value = finalRes;
    } catch (error) {
        alert('Invalid calculation');
    }
}