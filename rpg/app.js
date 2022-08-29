//gloabal variables
var ask = require('readline-sync')

var characters = []

function Character(name, type, description, health, isAlive, inventory) {
    this.name = name
    this.type = type
    this.description = description
    this.health = health || 100
    this.isAlive = isAlive || true
    this.inventory = inventory || []

}

var player = new Character(
    '',
    'player',
    'The chosen wizard',
    100,
    true,
    []
)

var owl = new Character(
    'Hoot',
    'friend',
    'The owl, a wizards greatest companion',
    100,
    true,
    ["feathers of flight"]
)

var elf = new Character(
    'Savos',
    'enemy',
    'The dark elf that got consumed and cursed by the dark arts',
    100,
    true,
    ["staff of power"]
)

var ogre = new Character(
    'One Eye',
    'enemy',
    'The mighty one-eyed Ogre, leader of Banished lands',
    100,
    true,
    ["mace of malice"]
)

var grindelwald = new Character(
    'Grindelwald',
    'player',
    'The master of disguise, the evil banished wizard',
    100,
    true,
    ["elder wand"]
)

characters.push(player)
characters.push(owl)
characters.push(elf)
characters.push(ogre)
characters.push(grindelwald)

Character.prototype.printCharacterStats = function () {
    var printOut =
        "\n" + (this.type).toUpperCase() + ':\t\t' + this.name +
        "\n-----------------------------------------------------" +
        '\n* Description:\t' + this.description +
        '\n* Health:\t' + this.health + "/100"

    printOut += '\n* Inventory:\t[ ' + this.inventory + ' ]'

    return (printOut)
}

var currentEnemy

var defeatedEnemies = []

var areAllDefeated = false

function journey() {
    var fate = getRandomNum(1, 3)

    if (fate === 1) {
        currentEnemy = undefined
        while (currentEnemy === undefined) {
            currentEnemy = enemyCreation()
        }
        enemyAttacks()
    } else {
        console.log("\n" + randomJorneyText())
    }
}

function randomJorneyText() {
    var fate = getRandomNum(1, 10)

    switch (fate) {
        case 1:
            return ("You journey through a mysterious river.")
            break
        case 2:
            return ("A merchant passes by you... he needs a bath.")
            break
        case 3:
            return ("You spot a strange tower with a menacing aura, best to avoid it.")
            break
        case 4:
            return ("You pass by a village, a white haired yellow eyed individual gives you a dirty look. Best to keep traveling.")
            break
        case 5:
            return ("You forget why you are forever traveling.")
            break
        case 6:
            return ("A flock of vampires fly by, you hide till they are gone.")
            break
        case 7:
            return ("A foggy mist approaches, time for a detour.")
            break
        case 8:
            return ("A group of hobbits pass by talking about a ring...")
            break
        case 9:
            return ("A strange soldier follows you to tell you he took an arrow to the knee.")
            break
        case 10:
            return ("You wonder why you are a wizard in the first place.")
        default:
            return ("You journey through the forest.")

    }
}

function enemyCreation() {
    var num = getRandomNum(2, 4)
    var newEnemy = characters[num]

    if (!newEnemy.isAlive) {
        enemyCreation()
    } else {
        return newEnemy
    }
}

function enemyAttacks() {
    var fleeSuccess = false

    console.log("\nYou are approached by an enemy!")
    console.log((currentEnemy.name).toUpperCase() + " the " + currentEnemy.description + "!")

    while ((fleeSuccess === false && currentEnemy.isAlive && player.isAlive)) {

        var userChoice = ask.keyInSelect(enemyOptions, "What would you like to do? ")

        if (userChoice === 0) {
            attackEnemy()

        } else if (userChoice === 1) {
            fleeSuccess = fleeEnemy()

        } else if (userChoice === 2) {
            console.log(player.printCharacterStats())

        } else if (userChoice === 3) {
            console.log(currentEnemy.printCharacterStats())

        } else if (userChoice === -1) {
            console.log("Canceling is not an option. The mighty wizard never cancels!")

        }
    }
}

function attackEnemy() {

    var attackSuccess = getRandomBoolean()

    if (attackSuccess) {

        var damage = getRandomNum(1, 2)
        var enemyDamage = getRandomNum(15, 30)

        currentEnemy.health -= enemyDamage

        currentEnemy.isAlive = isAliveOrDead(currentEnemy)

        if (currentEnemy.isAlive) {

            player.health -= damage
            player.isAlive = isAliveOrDead(player)

            console.log("\nSplendid. You have done considerable damage to your attacker.")
            console.log("You have taken minimal damage: -" + damage + " hp")
            console.log("But your efforts are stronger, your enemy received -" + enemyDamage + " hp")

        }

        if (areAllDefeated) {
            console.log("Congradulations master sourcerer!")
            console.log("You have vanquished all foes and beat the game. You are now Headmaster of Hogwarts in Middle Earth. Or something like that...")
        }


    } else {

        var damage = getRandomNum(5, 10)

        player.health -= damage
        player.isAlive = isAliveOrDead(player)

        console.log("DANGER! Your attack failed and you have taken damage!")
        console.log("You lost " + damage + " hp.")
    }
}

function fleeEnemy() {
    var fleeSuccess = getRandomBoolean()

    if (fleeSuccess) {

        var damage = getRandomNum(1, 3)

        player.health -= damage
        player.isAlive = isAliveOrDead(player)

        console.log("You escaped the battle! You sustained a wound :(")
        console.log("You lost " + "hp.")
    } else {
        var damage = getRandomNum(4, 8)

        player.health -= damage
        player.isAlive = isAliveOrDead(player)

        console.log("You failed to flee, enemy caught you trying to escape.")
        console.log("You sustained -" + damage + "hp for attempting to flee.")

    }
    return fleeSuccess
}

function characterDies() {
    console.log("This is uneventful " + player.name + ".")
    console.log("As strong as you tried, your health could not take it anymore.")
    console.log("You, the mighty wizard, has been slained.")
    process.exit(1)

}

function enemyDies() {
    var hp = getRandomNum(20, 25)

    if ((player.health + hp) >= 100) {
        player.health = 100
    } else {
        player.health += hp
    }

    console.log("Congratulations, you have slained " + currentEnemy.name + " the " + ", " + currentEnemy.description + "!")
    console.log("You have recovered some health with " + hp + "hp to " + player.health + "/100")
    console.log("Over the slained corpse you find a " + currentEnemy.inventory[0] + ", which you pick up and add to your inventory.")

    player.inventory.push(currentEnemy.inventory[0])

    currentEnemy.inventory = []

    defeatedEnemies.push(currentEnemy.name)

    currentEnemy.isAlive = false

    if (defeatedEnemies.length === 3) {
        areAllDefeated = true
    }
    return false
}

function isAliveOrDead(creature) {
    if (creature === player) {
        return (creature.health > 0) ? true : characterDies()
    } else {
        return (creature.health > 0) ? true : enemyDies()
    }
}

function getRandomNum(min, max) {
    // returns a random number between min (inclusive) and max (inclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
    return (Math.random() >= 0.5)
}

while (!player.name) {
    player.name = ask.question("What is the name of your choosing? ");
}

console.log("Welcome to the land of the tarnished, " + player.name + ".")

console.log("You have lost your memory of who you are or where you are but you know that you have a great magical power within yourself.")

console.log("You find a note in your pocket that is inscribed 'You need to find the magical portal and enter it if you want your memory back.' You gather your belongings to start your journey.")

var options = ["Jorney", "View my current stats"]
var enemyOptions = ["Attack", "Flee", " View my stats", "View enemy's stats"]

while (player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What is it you would like to do?")
    if (userChoice === 0) {
        journey()
    } else if (userChoice === 1) {
        console.log(player.printCharacterStats())
    } else if (userChoice === -1) {
        console.log("Farwell.")
        process.exit(1)
    }
}