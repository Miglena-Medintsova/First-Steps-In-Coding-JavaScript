function cinema(input) {
let movieType = input[0];
let r = Number(input[1]);
let c = Number(input[2]);

let totalPrice = 0;

if(movieType === 'Premiere') {
    totalPrice = r * c * 12;

} else if(movieType === 'Normal') {
    totalPrice = r * c * 7.5;

} else if(movieType === 'Discount') {
    totalPrice = r * c * 5;
}
console.log(`${totalPrice.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"])



