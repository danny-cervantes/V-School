//FORCEPTION
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet) {
    // new array to hold the final output so it can console.log in one line
    combinedArr = []

    // loop through the people names first
    for (var i = 0, len1 = people.length; i < len1; i++) {
        combinedArr.push(people[i])

        // then loop through the alphabet to add all of them after each name
        for (var j = 0, len2 = alphabet.length; j < len2; j++) {
            combinedArr.push(alphabet[j].toUpperCase())
        }
    }
    return (combinedArr)
}

console.log(
    "["
    + forception(["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"], "abcdefghijklmnopqrstuvwxyz")
    + "]") 