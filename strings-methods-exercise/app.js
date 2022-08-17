//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

//capilizeAndLowercase("HelLo") // => "HELLOhello"

var helloString = "Hello"

function capilizeAndLowercase(helloString) {
    string1 = helloString.toUpperCase()
    string2 = helloString.toLocaleLowerCase()
    return (string1 + string2)
}

console.log(capilizeAndLowercase(helloString))

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

//Hint: You'll need to use Math.floor().

//findMiddleIndex("Hello") // => 2
//findMiddleIndex("Hello World") // => 5

var index1 = "Hello"

var index2 = "Hello World"
function findMiddleIndex(str) {
    return (Math.floor(str.length / 2))

}

console.log(findMiddleIndex(index1))

console.log(findMiddleIndex(index2))


//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

//Hint: If your string length is odd, use Math.floor() to round down.

//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"

var slice1 = "Hello"

var slice2 = "Hello World"

function returnFirstHalf(str) {
    return (str.slice(0, Math.floor(str.length / 2)))
}

console.log(returnFirstHalf(slice1))
console.log(returnFirstHalf(slice2))

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

//Hint: If your string length is odd, use Math.floor() to round down.

//capilizeAndLowercase("Hello") // => "HEllo"
//capilizeAndLowercase("Hello World") // => "HELLO world"

var lowerAndUpper1 = "Hello"

var lowerAndUpper2 = "Hello World"

function capilizeAndLowercase(str) {
    var strIndex = Math.floor(str.length / 2)

    var strUpper = str.slice(0, strIndex).toUpperCase()
    var strLower = str.slice(strIndex, str.length).toLocaleLowerCase()
    return (strUpper + strLower)
}

console.log(capilizeAndLowercase(lowerAndUpper1))
console.log(capilizeAndLowercase(lowerAndUpper2))