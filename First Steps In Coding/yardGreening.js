function yardGreening(input) {
let squareMetersGreening = Number(input["0"]);
let totalPrice = squareMetersGreening * 7.61;
let discount = 0.18 * totalPrice;
let wholePrice = totalPrice - discount;
console.log(`The final price is: ${wholePrice} lv.
The discount is: ${discount} lv.` )
}
yardGreening(["150"])
