// Declare and assign the variables below
const shuttle = "Determination";
let speed = 17500;
// Speed is in MPH
let Distance1 = 225000000;
// Distance 1 is Mars in KM
let Distance2 = 384400;
// Distance 2 is Moon in KM
const Conversion = .621;
// Conversion is Miles to Kilometers

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttle)
console.log(typeof speed)
console.log(typeof Distance1)
console.log(typeof Distance2)
console.log(typeof Conversion)

// Calculate a space mission below
let MilesToMars = Conversion * Distance1;
let TravelTime = MilesToMars / speed;
let Time = TravelTime / 24;

console.log(Time)
//Included to check math

// Print the results of the space mission calculations below
console.log(shuttle, "will take", Time, "days to reach Mars.")
// Calculate a trip to the moon below
let MilesToMoon = Conversion * Distance2;
TravelTime = MilesToMoon / speed;
Time = TravelTime / 24;

console.log(Time)
// Included to check math

// Print the results of the trip to the moon below
console.log(shuttle, "will take", Time, "days to reach the Moon.")