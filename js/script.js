const inputDisplay = document.getElementById('inputDisplay')
const btnEqual = document.getElementById('btn_equal')

function onButtonClick(btn) {
    inputDisplay.value += btn
}

btnEqual.addEventListener('click', (event) => {
    try {
        if (inputDisplay.value.length != 0)
        {
            let result = calculateResult(inputDisplay.value);

            inputDisplay.value = result
        }
    }   catch(err) {
        inputDisplay.value = 'Erro';
    }
})

function calculateResult(expressao) {
    let elements = expressao.split(/(\+|\-|\x|\/)/);

    if (elements.length != 0) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === 'x') {
                let result = parseFloat(elements[i - 1]) * parseFloat(elements[i + 1]);
                elements.splice(i - 1, 3, result);
                i--;
            }   else if (elements[i] === '/') {
                let result = parseFloat(elements[i - 1]) / parseFloat(elements[i + 1]);
                elements.splice(i - 1, 3, result);
                i--;
            }
        }
    
        let result = parseFloat(elements[0]);
        for (let i = 1; i < elements.length; i += 2) {
            console.log(i)
            let operator = elements[i];
            let number = parseFloat(elements[i + 1]);
    
            if (operator === '+') {
                result += number;
            }   else if (operator === '-') {
                result -= number;
            }
        }
        return result;
    }
}