/*
   lab.js - JSON and APIs

   Requirements: jQuery must be loaded for this script to work.

   Author: Angelleeanna Bingham
   Date: 2024
*/


    // Using the core $.ajax() method
    function make_safe(str) {
        return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
    }
   
    function comicObj() {
        if (typeof num === 'undefined') {
            numStr = "";
          } else {
            numStr = num.toString() + "/";
          }
        $.ajax({
    // The URL for the request (from the api docs)
        url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        })
    // What do we do when the api call is successful
    //   all the action goes in here
    .done(function(data) {
        // console.log(data);
            var imageUrl = data.img;
            var title = data.title;
            console.log("orig title:", title);
            title = make_safe(title);
            console.log("safe title:", title);
            var alt = data.alt;
            console.log("orig alt:", alt);
            alt = make_safe(alt);
            console.log("safe alt:", alt);
            var comicNum = data.num;
            var html = `<div id="imageblock">
            <h2>${title}</h2>
            <img src="${imageUrl}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
            </div>`
      // console.log("My new html: \n", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        comicObj(comicNum - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        comicObj(comicNum + 1);
      });
  })
     .fail(function(){
        console.log("^^ Please ignore this error. It's okay.");
        console.log("Have a okay day! :-)");
  })

}       


// start things off
comicObj();

//code courtesy of Wes Modes