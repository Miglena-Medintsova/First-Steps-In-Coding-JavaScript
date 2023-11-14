function depostitCalculator(input) {
let depositedSum = Number(input[0]);
let depositTrialMonths = Number(input[1]);
let yearInterestPercent = Number(input[2]);
let yearInterestDecimal = yearInterestPercent / 100;
let totalSum = depositedSum + depositTrialMonths * ((depositedSum * yearInterestDecimal) / 12);
console.log(totalSum);
}
depostitCalculator(["200","3","5.7"])
