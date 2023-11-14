function suppliesForSchool (input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let boardPreparation = Number(input[2]);
    let percentDiscount = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let boardPreparationPrice = boardPreparation * 1.20;
    let totalPrice = pensPrice + markersPrice + boardPreparationPrice;
    let percentDecimal = percentDiscount / 100;
    let priceWithDiscount = totalPrice - (totalPrice * percentDecimal);
    console.log(priceWithDiscount);
}
suppliesForSchool(["2","3","4","25"])



