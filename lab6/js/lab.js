// index.js - purpose and description here
// Author: Angelleeanna Bingham
// Date: 10/24/24

// Define Variables
myTransport = ["hyundai elantra", "walking", "metro bus"];

// create an object for my main ride
myMainRide = {
    make : "hyundai",
    model : "elantra",
    color : "tan",
    year : 1991,
  // we can define a function within our object (called a method)
  // that uses the value of year above (using this.year)
  age : function() {
    return 2024 - this.year;
  }
};

// output
document.writeln("Getting around: " + myTransport + "<br>");
// allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");