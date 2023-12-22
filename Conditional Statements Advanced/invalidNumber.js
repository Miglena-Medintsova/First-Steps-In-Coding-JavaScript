function invalidNumber(input) {
    let numb = Number(input[0]);
    let isValid = (numb === 0 || numb >= 100 && numb <= 200);
    if (!isValid) {
        console.log("invalid");
    }
}
invalidNumber(["150"])
