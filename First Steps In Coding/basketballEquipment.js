function basketballEquipment(input) {
    let annualBasketballTax = Number(input[0]);
    let sneakersPrice = annualBasketballTax - (0.40 * annualBasketballTax);
    let  outfitPrice = sneakersPrice - (0.20 * sneakersPrice);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let totalEquipmentPrice = annualBasketballTax + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalEquipmentPrice);
}

basketballEquipment(["365"])