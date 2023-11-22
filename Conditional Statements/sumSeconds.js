function sumSeconds(input){
let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);
let totalTime = first + second + third;
let minutesSum = Math.floor(totalTime / 60);
let secondsSum = totalTime % 60;
if(secondsSum < 10){
    console.log(`${minutesSum}:0${secondsSum}`);
} else {
    console.log(`${minutesSum}:${secondsSum}`);
}
}
sumSeconds(["14", "12", "10"])



