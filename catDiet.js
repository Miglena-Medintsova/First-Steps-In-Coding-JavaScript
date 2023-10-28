function catDiet(input) {
let fats = Number(input[0]);
let proteins = Number(input[1]);
let carbohydrates = Number(input[2]);
let totalCalories = Number(input[3]);
let water = Number(input[4]);

let totalGramsFats = (fats / 100 * totalCalories) / 9;
let totalGramsProteins = (proteins / 100 * totalCalories) / 4;
let totalGramsCarbohydrates = (carbohydrates / 100 * totalCalories) / 4;

let totalGramsFood = totalGramsFats + totalGramsProteins + totalGramsCarbohydrates;
let caloriesForOneGramFood = totalCalories / totalGramsFood;

let waterCalories =  1 - water / 100;

let calories = waterCalories * caloriesForOneGramFood;

console.log(calories.toFixed(4));
}
catDiet(["20",
"60",
"20",
"1800",
"50"])


