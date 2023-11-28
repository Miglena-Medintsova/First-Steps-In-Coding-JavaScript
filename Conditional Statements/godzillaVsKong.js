function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let priceForClothesPerActor = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let clothesPrice = actorsCount * priceForClothesPerActor;

    if (actorsCount > 150) {
        clothesPrice = 0.90 * clothesPrice;


    }
    let totalPrice = decorPrice + clothesPrice;

    if (totalPrice > budget) {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);

    } else {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88","222","55.68"])
