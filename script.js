// Write your JavaScript code here!

window.addEventListener("load", function() {
    let formButton = document.getElementById("formSubmit");
    formButton.addEventListener("click", function(e){
        e.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copolitName");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoLevel = document.querySelector("input[name=cargoMass");
        let list = document.getElementById("faultyItems");



        //alert("Testing Block");



        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })
//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});