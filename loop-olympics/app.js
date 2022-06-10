// loop olympics

//preliminaries

//1
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])

}

//2
var numArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


for (let i = numArray2.length; i >= -1; i--) {
    console.log(numArray2[i]);

}

//3
const fruit = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);

}

//BRONZE MEDAL

//1

var newArray = [];

for (let i = 0; i <= 9; i++) {
    newArray.push(i);

};
console.log(newArray);

//2

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
};

//3

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (let i = 0; i <= fruits.length; i += 2) {
    console.log(fruits[i])
}