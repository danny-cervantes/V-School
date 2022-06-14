var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//1

vegetables.pop()
console.log(vegetables)

//2

fruit.shift()
console.log(fruit)

//3 

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
console.log(fruit)

//4 

fruit.push(orangeIndex)
console.log(fruit)

//5
var vegetablesLength = vegetables.length
console.log(vegetablesLength)

//6
vegetables.push(vegetablesLength)
console.log(vegetables)

//7
var food = fruit.concat(vegetables)
console.log(food)

//8
var remove = food.splice(4, 2)

//9
var reversedFood = food.reverse()
console.log(reversedFood)