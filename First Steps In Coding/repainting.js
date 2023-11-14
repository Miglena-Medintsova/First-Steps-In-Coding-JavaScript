function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let additionalPaint = 0.10 * paint;
    let totalPaint = paint + additionalPaint;

    let totalNylon = nylon + 2;

    let totalMaterialsPrice = totalPaint * 14.50 + totalNylon * 1.50 + thinner * 5 + 0.40;

    let workersSumPerHour = 0.30 * totalMaterialsPrice;
    let totalWorkersSum = workHours * workersSumPerHour;

    let totalSum = totalMaterialsPrice + totalWorkersSum;
    console.log(totalSum);
}

repainting(["10", "11", "4", "8"])
