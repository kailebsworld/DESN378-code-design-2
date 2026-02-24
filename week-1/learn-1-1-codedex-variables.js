// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Kaileb]
// Date: [1-14-26]
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

const firstName = "Kaileb";
const favoriteColor = "Blue"

let currentLocation = "Bedroom";
let mood = "Sleepy";

console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood);

mood = "Wide awake";
console.log(mood);

// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------

const companyName = "Maison Margiela";

const foundingYear = 1988;

let isActive = true;

let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);

// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Brooklyn,NY temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------

const fahrenheit = 46;

const celsius = (fahrenheit - 32) / 1.8;

console.log("Brooklyn temp in °F:", fahrenheit);
console.log("Brooklyn temp in °C:", celsius);

// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------

const billAmount = 42.75;
const tipPercent = 18;

const tipAmount = billAmount * (tipPercent / 100);
const total = billAmount + tipAmount;

console.log("------ RECEIPT ------");
console.log("Bill: $" + billAmount.toFixed(2));
console.log("Tip (" + tipPercent + "%): $" + tipAmount.toFixed(2));
console.log("Total: $" + total.toFixed(2));
console.log("---------------------");

// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

const numberOfSongs = 30;
const avgSongLength = 4; // minutes

const totalMinutes = numberOfSongs * avgSongLength; // 120
const totalHours = totalMinutes / 60;               // 2

console.log("------ PLAYLIST SUMMARY ------");
console.log("Songs: " + numberOfSongs);
console.log("Avg length: " + avgSongLength + " minutes");
console.log("Total time: " + totalMinutes + " minutes");
console.log("Total time in hours: " + totalHours + " hours");
console.log("------------------------------");
