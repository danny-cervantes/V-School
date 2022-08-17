//Write a short program that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//### **Example:**
//12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect.

var fizzbuzz = "";

for (var i = 1; i < 100; i++) {
    if (!(i % 5) && !(i % 3)) {
        fizzbuzz = fizzbuzz + "FizzBuzz "
    } else if (!(i % 5)) {
        fizzbuzz = fizzbuzz + "Fizz "
    } else if (!(i % 3)) {
        fizzbuzz = fizzbuzz + "Buzz "
    } else {
        fizzbuzz = fizzbuzz + i + " "
    }
}
console.log(fizzbuzz)