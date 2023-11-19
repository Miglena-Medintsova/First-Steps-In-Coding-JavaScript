function number100200(input) {
    let num1 = Number(input[0]);
    let min = 100;
    let max = 200;
    if (num1 < min) {
        console.log("Less than 100");
    } else if (num1 >= min && num1 <= max) {
        console.log("Between 100 and 200");
    } else if (num1 > max) {
        console.log("Greater than 200");
    }
}
number100200(["210"])


