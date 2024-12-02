
/*
   lab.js - AJAX

   Requirements: jQuery must be loaded for this script to work.

   Author: Angelleeanna Bingham
   Date: 2024
*/

// yes or no api
//"answer": "yes",
//"forced": false,
//"image": "https://yesno.wtf/assets/yes/2.gif"



$("#mybutton").click(function() {
    console.log("The button was clicked!");


// Using the core $.ajax() method

$.ajax({
    //the url for the request (from the api docs)
    url: "https://yesno.wtf/api",
    //whether this is a POST or GET request
    type: "GET",
    dataType: "json",
    //what do we do when the api call is successful
    success: function(data) {
        console.log(data);


        },
    });
});