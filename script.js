// Write your JavaScript code here!

const { addDestinationInfo, pickPlanet, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let formButton = document.getElementById("formSubmit");
    formButton.addEventListener("click", function(e){
        e.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copolitName").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value;
        let cargoLevel = document.querySelector("input[name=cargoMass").value;
        let list = document.getElementById("faultyItems");

         //alert("Testing Block");


        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
      
       //addDestinationInfo(document, name, diameter, star, distance, imageUrl, moons);
  
  })
   
});