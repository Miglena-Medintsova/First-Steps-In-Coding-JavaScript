function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    let totalPriceStudio = 0;
    let totalPriceApartment = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;

            if (nightsCount > 7 && nightsCount <= 14) {
                studioPrice *= 0.95;
                totalPriceStudio = studioPrice * nightsCount;
                totalPriceApartment = apartmentPrice * nightsCount;

            } else if (nightsCount > 14) {
                studioPrice *= 0.70;
                totalPriceStudio = studioPrice * nightsCount;
                apartmentPrice *= 0.90;
                totalPriceApartment = apartmentPrice * nightsCount;

            } else {
                totalPriceStudio = studioPrice * nightsCount;
                totalPriceApartment = apartmentPrice * nightsCount;
            }
            break;

        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            if (nightsCount > 14) {
                studioPrice *= 0.80;
                totalPriceStudio = studioPrice * nightsCount;
                apartmentPrice *= 0.90;
                totalPriceApartment = apartmentPrice * nightsCount;
            } else {
                totalPriceStudio = studioPrice * nightsCount;
                totalPriceApartment = apartmentPrice * nightsCount;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;

            if (nightsCount > 14) {
                apartmentPrice *= 0.90;
                totalPriceApartment = apartmentPrice * nightsCount;
                totalPriceStudio = studioPrice * nightsCount;
            } else {
                totalPriceApartment = apartmentPrice * nightsCount;
                totalPriceStudio = studioPrice * nightsCount;
            }
            break;
        default:
            break;
    }
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
}
hotelRoom(["June", "14"])

