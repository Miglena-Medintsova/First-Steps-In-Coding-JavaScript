function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let totalPrice = 0;
    let nights = days - 1;

    switch (roomType) {
        case 'room for one person':
            totalPrice = nights * 18;

            break;

        case 'apartment':
            totalPrice = nights * 25;
            if(nights < 10) {
                totalPrice *= 0.70;
            
            } else if (nights >= 10 && nights <= 15) {
                totalPrice *= 0.65;
            
            } else if(nights > 15) {
                totalPrice *= 0.50;

            }

            break;

        case 'president apartment':
            totalPrice = nights * 35; 
        
            if(nights < 10) {
                totalPrice *= 0.90;
            
            } else if (nights >= 10 && nights <= 15) {
                totalPrice *= 0.85;
            
            } else if(nights > 15) {
                totalPrice *= 0.80;
                
            }
            break;


    }
    if(review === 'positive') {
        totalPrice *= 1.25;
    } else if (review === 'negative') {
        totalPrice *= 0.90;
    }
    console.log(totalPrice.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])


