function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegMenuPrice = vegMenu * 8.15;

    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegMenuPrice;

    let desertPrice = 0.20 * totalMenuPrice;

    let totalPriceForDelivery = totalMenuPrice + desertPrice + 2.50;

    console.log(totalPriceForDelivery);
}
foodDelivery(["9","2","6"])
