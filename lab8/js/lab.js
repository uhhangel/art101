// index.js - Lab 8
// Author: Angelleeanna Bingham
// Date: 10/30/24

function isEven(x) {
    return x % 4 == 0;
}

// test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [100, 81, 4, 16, 42, 144, 1000];
console.log("My array ", array);

var result = array.map(isEven);
console.log("Test of evenness of array:", result);
var result = array.map(function (x) {
    return x ** 2.5;
});

// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result);

// allows us to write an object to the doccument

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction(param1, param2) {
}

function main() {
    console.log("Main function started.");
}