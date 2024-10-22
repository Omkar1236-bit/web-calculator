// Display input in the calculator screen
function inputValue(value) {
    document.getElementById('display').value += value;
}

// Clear the calculator display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character in the display
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
    try {
        let display = document.getElementById('display').value;
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
