let display = document.getElementById("display");
let currentInput = "";
let currentOperator = null;
let previousInput = "";
function appendNumber(number) {
    if (currentInput === "0" && number !== ".") currentInput = ""; 
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (currentInput === "" && operator !== "-") return;
    if (previousInput) calculateResult();
    previousInput = currentInput;
    currentOperator = operator;
    currentInput = "";
    updateDisplay();
}
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (currentOperator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr !== 0 ? prev / curr : "Error";
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperator = null;
    previousInput = "";
    updateDisplay();
}
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    currentOperator = null;
    updateDisplay();
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function updateDisplay() {
    display.innerText = currentInput || "0";
}
