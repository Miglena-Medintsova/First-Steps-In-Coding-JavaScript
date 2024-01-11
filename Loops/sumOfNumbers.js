function sumOfNumbers(input) {
    
    let numberAsString = input.toString();
    let sum = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        let currentNumber = Number(numberAsString[index]);

        sum = sum + currentNumber;
    }
console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"])
