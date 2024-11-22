/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Angelleeanna Bingham
   Date: 2024
*/


// Create a function sortingHat()
function sortingSmoothie(str) {
// counts the letters in str and assigns it to a variable length uses modulus (% operator) to get the remainder with 4: mod = length % 4; mod will now be a value between 0 and 3
    len = str.length;
    mod = len % 3;
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
    if (mod == 0) {
        return "Strawberry Banana"
    }
    else if (mod == 1) {
        return "Razzmatazz"
    }
    else if (mod == 2) {
        return "Wild Berry"
    }
    else if (mod == 3) {
        return "Piña Colada"
    }
    else {
        return "Well, no smoothie for you."
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingSmoothie(name);
    newText = "<p>The smoothie you are is... " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})

