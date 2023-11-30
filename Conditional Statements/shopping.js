function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;

    let processorPrice = 0.35 * videoCardsPrice;
    let totalSumProcessor = processor * processorPrice;

    let ramPrice = 0.10 * videoCardsPrice;
    let totalSumRam = ram * ramPrice;

    let totalPrice = videoCardsPrice + totalSumProcessor + totalSumRam;

    if (videoCards > processor) {
        totalPrice = totalPrice * 0.85;
    }

    if (totalPrice <= budget) {
        let residualBudget = budget - totalPrice;
        console.log(`You have ${residualBudget.toFixed(2)} leva left!`)

    } else {
        let neededSum =  totalPrice - budget;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])


