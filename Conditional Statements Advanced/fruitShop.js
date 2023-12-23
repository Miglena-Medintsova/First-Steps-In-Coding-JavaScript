function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

            switch (fruit) {
                case "banana": finalSum = quantity * 2.5; console.log(finalSum.toFixed(2)); break;
                case "apple": finalSum = quantity * 1.2; console.log(finalSum.toFixed(2)); break;
                case "orange": finalSum = quantity * 0.85; console.log(finalSum.toFixed(2)); break;
                case "grapefruit": finalSum = quantity * 1.45; console.log(finalSum.toFixed(2)); break;
                case "kiwi": finalSum = quantity * 2.7; console.log(finalSum.toFixed(2)); break;
                case "pineapple": finalSum = quantity * 5.5; console.log(finalSum.toFixed(2)); break;
                case "grapes": finalSum = quantity * 3.85; console.log(finalSum.toFixed(2)); break;
                default: console.log("error"); break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": finalSum = quantity * 2.7; console.log(finalSum.toFixed(2)); break;
                case "apple": finalSum = quantity * 1.25; console.log(finalSum.toFixed(2)); break;
                case "orange": finalSum = quantity * 0.9; console.log(finalSum.toFixed(2)); break;
                case "grapefruit": finalSum = quantity * 1.6; console.log(finalSum.toFixed(2)); break;
                case "kiwi": finalSum = quantity * 3; console.log(finalSum.toFixed(2)); break;
                case "pineapple": finalSum = quantity * 5.6; console.log(finalSum.toFixed(2)); break;
                case "grapes": finalSum = quantity * 4.2; console.log(finalSum.toFixed(2)); break;
                default: console.log("error"); break;
            }
            break;
            default:console.log("error");
    }
}
fruitShop(["tomato", "Monday", "0.5"])




