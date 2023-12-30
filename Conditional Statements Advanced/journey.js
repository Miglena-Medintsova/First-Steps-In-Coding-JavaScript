function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let holidayKind = '';
    let totalPrice = 0;

    if (budget <= 100 && season === 'summer') {
        destination = 'Bulgaria';
        holidayKind = 'Camp';
        totalPrice = budget * 0.30;

    } else if (budget <= 100 && season === 'winter') {
        destination = 'Bulgaria';
        holidayKind = 'Hotel';
        totalPrice = budget * 0.70;

    } else if (budget <= 1000 && season === 'summer') {
        destination = 'Balkans';
        holidayKind = 'Camp';
        totalPrice = budget * 0.40;

    } else if (budget <= 1000 && season === 'winter') {
        destination = 'Balkans';
        holidayKind = 'Hotel';
        totalPrice = budget * 0.80;

    } else if (budget >= 1000 && season === 'summer' || season === 'winter') {
        destination = 'Europe';
        holidayKind = 'Hotel';
        totalPrice = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayKind} - ${totalPrice.toFixed(2)} `);
}
journey(["312", "summer"])
