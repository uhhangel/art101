// index.js - Lab 7
// Author: Angelleeanna Bingham
// Date: 10/27/24

function sortUserName() {
// declare a variable userName and use window.prompt
var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
if (!userName) {
    return "No name provided.";
}
// Sort the letters of the user's name and return those from the function.
var nameSorted = userName.toLowerCase().split("").sort().join("");
console.log("nameSorted =", nameSorted);
// Make sure your function uses return to return the results
return nameSorted;
}


// output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");