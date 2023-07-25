window.addEventListener("load", function() {
    const container = document.getElementById("container");
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
fetchPromise.then( function(response) {
   const jsonPromise = response.json();
   jsonPromise.then( function(json) {
      console.log("temp", json.temp);
   });
} )