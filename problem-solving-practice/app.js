/*
Write a function that takes an array of numbers and returns the largest (without using Math.max())

// test data
console.log(largest([6, 13, 250, 3)) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40
*/

arr = [6, 13, 250, 3]

function largest(arr) {
    num = arr[0]

    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > num) {
            num = arr[i]
        }
    }
    return num;
}
console.log('1. The largest number in aray  [' + arr + '] is: ' + largest(arr))

arr = [3, 5, 2, 8, 1]

function largest(arr) {
    num = arr[0]

    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > num) {
            num = arr[i]
        }
    }
    return num;
}
console.log('1. The largest number in aray  [' + arr + '] is: ' + largest(arr))

arr = [-13, 40, 3, 0, 19, 22]

function largest(arr) {
    num = arr[0]

    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > num) {
            num = arr[i]
        }
    }
    return num;
}
console.log('1. The largest number in aray  [' + arr + '] is: ' + largest(arr))

/*
Write a function that takes an array of words and a character and returns each word that has that character present.

// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []
*/

str = '!'
arr = ["$hello!", "%%^%%", "test!"]

function lettersWithStrings(arr, str) {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
        //if "!" found in the array's chosen string
        if (arr[i].match(/!/g)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(
    '2. In the Aarray[' +
    arr + '}, the char "' +
    str + '" appears in the following words: [' +
    lettersWithStrings(arr, str)
    + '].'
)

str = '!'
arr = ["#3", "&&", "C&$", "Hey!"]

function lettersWithStrings(arr, str) {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
        //if "!" found in the array's chosen string
        if (arr[i].match(/!/g)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(
    '2. In the Aarray[' +
    arr + '}, the char "' +
    str + '" appears in the following words: [' +
    lettersWithStrings(arr, str)
    + '].'
)

str = 'h'
arr = ["yellow", "green", "^up^", "down", "dog"]

function lettersWithStrings(arr, str) {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
        //if "!" found in the array's chosen string
        if (arr[i].match(/!/g)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(
    '2. In the Aarray[' +
    arr + '}, the char "' +
    str + '" appears in the following words: [' +
    lettersWithStrings(arr, str)
    + '].'
)


/*
Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
*/
num1 = 4
num2 = 2

function isDivisible(num1, num2) {
    if (!(num1 % num2)) {
        return (true)
    } else {
        return (false)
    }
}

if (isDivisible(num1, num2)) {
    console.log('3.' + num1 + ' is divisble by ' + num2 + '.')
} else {
    console.log('3.' + num1 + ' is not divisble by ' + num2 + '.')
}

num1 = 9
num2 = 3

function isDivisible(num1, num2) {
    if (!(num1 % num2)) {
        return (true)
    } else {
        return (false)
    }
}

if (isDivisible(num1, num2)) {
    console.log('3.' + num1 + ' is divisble by ' + num2 + '.')
} else {
    console.log('3.' + num1 + ' is not divisble by ' + num2 + '.')
}

num1 = 15
num2 = 4

function isDivisible(num1, num2) {
    if (!(num1 % num2)) {
        return (true)
    } else {
        return (false)
    }
}

if (isDivisible(num1, num2)) {
    console.log('3.' + num1 + ' is divisble by ' + num2 + '.')
} else {
    console.log('3.' + num1 + ' is not divisble by ' + num2 + '.')
}

