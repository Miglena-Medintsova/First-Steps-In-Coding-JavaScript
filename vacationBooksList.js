function vacatioBooksList(input) {
let numberOfPages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let numberOfDays = Number(input[2]);
let allTimeForReading = numberOfPages / pagesPerHour;
let nedeedHoursPerDay = allTimeForReading / numberOfDays
console.log(nedeedHoursPerDay);
}
vacatioBooksList(["212","20 ","2 "])

