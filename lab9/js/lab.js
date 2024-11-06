/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Angelleeanna Bingham
   Date: 2024
*/

// add button to challenge section

$("#challenge").append("<button id='button-challenge'>Make special</button>");
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
    console.log("clik");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make special</button>");
    $("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

// add a button to results section
$("#results").append("<button id='button-results'>Make special</button>");
    $("#button-results").click(function(){
     $("#results").toggleClass("special");
    });

