// Get the current date
const today = new Date();
const year = today.getFullYear();

// Calculate total days in the current year (accounting for leap years)
const totalDays = new Date(year, 11, 31).getDate() === 31 ? 366 : 365;

// Calculate the number of days passed and left
const startOfYear = new Date(year, 0, 1);
const daysPassed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
const daysLeft = totalDays - daysPassed;

// Update the webpage
document.getElementById("current-date").textContent = today.toDateString();
document.getElementById("days-passed").textContent = daysPassed;
document.getElementById("days-left").textContent = daysLeft;
document.getElementById("total-days").textContent = totalDays;