/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Angelleeanna Bingham
   Date: 2024
*/

// create a FizzBuzz function that loops through numbers 1-200
function myFizzBuzz() {
    for (let i=1; i<=200;i++) {
        let number = '';
    // If the number is a multiple of 3, if should print "Fizz!"
    if (i%40 == 0) {
        $("#output").append("<p>BuzzBoom!</p>");
    }
    else if (i%21 == 0) {
        $("#output").append("<p>FizzBoom!</p>");
    }
    else if (i%15 == 0) {
        $("#output").append("<p>FizzBuzz</p>");
    }
    else if (i%7 == 0) {
        $("#output").append("<p>Boom!</p>")
    }
    else if (i%5 == 0) {
        $("#output").append("<p>Buzz</p>");
    }
    else if(i%3 == 0) {
        $("#output").append("<p>Fizz</p>");
    }
    else {
        number = [...String(i)].join('');
        $("#output").append(`<p>${number}</p>`);
    }
    console.log("numbers are written");
    }   
}
myFizzBuzz();
 




// Make it so the output of your program appears in your output div. 