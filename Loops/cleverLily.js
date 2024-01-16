function cleverLily(input) {
let age = Number(input[0]);
let washerPrice = Number(input[1]);
let toyPrice = Number(input[2]);

let moneySaved = 0;
let moneyGiven = 10;

for (let i = 1; i <= age; i++) {
    if (i % 2 !== 0) {
        moneySaved += toyPrice;
    } else {
        moneySaved += (moneyGiven - 1);
        moneyGiven += 10;
    }
}
 if (moneySaved >= washerPrice) {
    let moneyLeft = moneySaved - washerPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
 } else {
    let moneyNeeded = washerPrice - moneySaved;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
 }
}

cleverLily(["10","170.00","6"])
