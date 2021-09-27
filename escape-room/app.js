var readline = require('readline-sync')

var name = readline.question('What is your name? ')
console.log('Welcome to the room of no escape, ' + name)

var gameOver = false
var hasKey = false

var options = ['Put hand in hole', 'Find the key', 'Open door']

while (!gameOver) {

    var userChoice = readline.keyInSelect(options, 'Choose your options wisely. ')
    if (userChoice === 0) {
        console.log('You put your hand in the hole and sucked into a black hole.')
        gameOver = true
        break
    } else if (userChoice === 1) {
        console.log('You found the key. Now try door if you dare.')
        hasKey = true
    } else if (userChoice === 2 && !hasKey) {
        console.log('You try the door, but it will not budge.')
    } else if (userChoice === 2 && hasKey) {
        console.log('You have escaped for now... Congrats')
        break
    } else if (userChoice === -1) {
        console.log('You can not cancel, nice try.')
    }

}
if (gameOver) {
    console.log('\nGame over.')
}

