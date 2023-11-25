function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = puzzle * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let toysNumber = puzzle + dolls + bears + minions + trucks;

    if (toysNumber >= 50) {
        totalPrice = 0.75 * totalPrice;
    }
    totalPrice = 0.90 * totalPrice;

    if (totalPrice >= vacationPrice) {
        let moneyLeft = totalPrice - vacationPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        (totalPrice < vacationPrice)
        let moneyNedeed = vacationPrice - totalPrice;
        console.log(`Not enough money! ${moneyNedeed.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])
