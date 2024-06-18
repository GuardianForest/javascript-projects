// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?
// No. Changing variable for the fuel check and then adding it to the if statement to check launchReady would correct this.
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let fuelStatus = false

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelStatus = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelStatus = false;
}

console.log("Fuel Status = ", fuelStatus);

if (crewStatus && computerStatus === 'green' && fuelStatus){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }