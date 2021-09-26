
function add(num1, num2) {
    return (num1 + ' + ' + num2 + " = " + (Number(num1) + Number(num2)))
}

function sub(num1, num2) {
    return (num1 + ' - ' + num2 + " = " + (Number(num1) - Number(num2)))
}

function mul(num1, num2) {
    return (num1 + ' x ' + num2 + " = " + (Number(num1) * Number(num2)))
}

function div(num1, num2) {
    return (num1 + ' / ' + num2 + " = " + (Number(num1) / Number(num2)))
}

var readline = require('readline-sync')

console.log('Hello! I am here to compute numbers for you!')

var morePlease = true;

while (morePlease) {

    var firstNum = readline.question('\nPlease give me a number: ')
    var secondNum = readline.question('Thanks! And a second number please: ')

    var operand = ['+', '-', '/', 'x']
    var i = readline.keyInSelect(operand, 'Which operand do you want to use? ')

    var resultMessage = '\nI have done the magic for you! '

    if (operand[i] === '+') {
        // if '+' selected
        console.log(resultMessage + add(firstNum, secondNum))
    } else if (operand[i] === '-') {
        // if '-' selected
        console.log(resultMessage + sub(firstNum, secondNum))
    } else if (operand[i] === '/') {
        // if '/' selected
        console.log(resultMessage + div(firstNum, secondNum))
    } else if (operand[i] === 'x') {
        // if 'x' selected
        console.log(resultMessage + mul(firstNum, secondNum))
    }

    morePlease = readline.keyInYNStrict('Would you like another?')
}