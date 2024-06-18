// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false
    console.log("Security alert! Unauthorized personnel on shuttle! Security alert!") 
    console.log("Clear docking bay for boarding party! Ready identitification for crew verification!")
};
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready"){
    preparedForLiftOff = false
    console.log("Launch Scrubbed! Prepare for Launch! Come on folks, this isn't rocket science!")
    console.log("Well, I guess it is rocket science, but still. Get ready! Cave Johnson, out!")
};
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false
    console.log("Mass exceeded, Scrub Launch! Dump fuel and recalculate!")
};
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    preparedForLiftOff = false
    console.log("Check fuel supply, fuel temperature unstable! Abort Launch!")
};
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false
    console.log("Insufficient fuel, check fuel levels and prepare for launch!")
};
// add logic below to verify the weather status is clear
if (weatherStatus != "clear") {
    preparedForLiftOff = false
    console.log("Poor launch conditions, Scrub Launch!")
};
// Verify shuttle launch can proceed based on above conditions
if (!preparedForLiftOff) {
    console.log("Scrub mission, scrubs. Get it together.")
    console.log("When life gives you lemons... Well, you know the rest! Cave Johnson, out.")
} else {
    console.log(`
        All systems are a go! Initiating space shuttle launch sequence.
        -----------------------------------------------------------------
        Date: ${date}
        Time: ${time}
        Astronaut Count: ${astronautCount}
        Crew Mass: ${crewMassKg} kg
        Fuel Mass: ${fuelMassKg} kg
        Shuttle Mass: ${shuttleMassKg} kg
        Total Mass: ${totalMassKg} kg
        Fuel Temperature: ${fuelTempCelsius} ºC
        Weather Status: ${weatherStatus}
        -----------------------------------------------------------------
        Have a safe trip astronauts!`)
};