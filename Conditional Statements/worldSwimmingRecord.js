function worldSwimmingRecord(input) {
let record = Number(input[0]);
let distance = Number(input[1]);
let timeForOneMeter = Number(input[2]);

let shouldSwimming = distance * timeForOneMeter;

let everySecondsAdded = Math.floor(distance / 15) * 12.5;

let totalTime = shouldSwimming + everySecondsAdded;

if (totalTime < record){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

} else {
    let neededTime = totalTime - record;
    console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
}
}


worldSwimmingRecord(["55555.67","3017","5.03"])
