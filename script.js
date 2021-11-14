function myFunc() {
    let number1 = parseFloat(document.getElementById('n1').value);
    let number2 = parseFloat(document.getElementById('n2').value);
    let operation = document.getElementById('operators').value;
    

    if (operation === '+') {
        document.getElementById('result').value = number1 + number2;
    }

    if (operation === '-') {
        document.getElementById('result').value = number1 - number2;
    }

    if (operation === '/') {
        document.getElementById('result').value = number1 / number2;
    }

    if (operation === '*') {
        document.getElementById('result').value = number1 * number2;
    }
}