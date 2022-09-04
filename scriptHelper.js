// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = 
                `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= '${imageUrl}'>
                ` 
}

function validateInput(string) {
    if (string === "") {
        return 'Empty'
    } else if (isNaN(parseInt(string))) {
        return 'Not a Number'
    } else if (!isNaN(parseInt(string))) {
        return 'Is a Number'
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copoliotStatus = document.getElementById('copolitStauts');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargpStatus = document.getElementById('cargoStatus');

   if (validateInput(pilot) === 'Empty' || 
       validateInput(copilot) === 'Empty' || 
       validateInput(fuelLevel) === 'Empty' || 
       validateInput(cargoLevel) === 'Empty') {
        window.alert('All Fields are Required.')
    }

    else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        window.alert(`Fuel Level and Cargo Mass require number values.`);
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copolit) === 'Is a Number') {
        window.alert(`Pilot and Copolit do not accept number values.`);
     }
        
    


    else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`;
    list.style.visibility = 'hidden';
    }



if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Not enough fuel for the journey.`;
    li.style.visibility = 'visible';
    launchStatus.innerHTML = `Shuttle not ready for launch.`;
    li.style.color = 'red';

} else if (Number(cargoLevel) > 10000 ) {
    li.stlye.visibility = 'visible';
    cargoStatus.innerHTML = `Too much mass for shuttle to take off.`;
    launchStatus.innerHTML = `Shuttle not ready for launch.`;
    launchStatus.style.color = 'red';

} else if (Number(cargoLevel) < 10000 === Number(cargoLevel) > 10000) {
    li.style.visibility = 'visible';
    fuelStatus.innerHTML = `All set for launch!`;
    cargoStatus.innerHTML = `Cargo mass acceptable for launch!`;
    launchStatus.innerHTML = `Shuttle ready for launch!`;
    launchStatus.style.color = 'green';
}

}




async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json ()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetX = Math.floor(Math.random() * planets.length);
    return planets[planetX];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
