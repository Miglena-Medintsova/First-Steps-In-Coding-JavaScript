function lunchBreak(input) {
    let name = (input[0]);
    let duration = Number(input[1]);
    let rest = Number(input[2]);

    let lunchTime = rest * 1 / 8;
    let recreationTime = rest * 1 / 4;

    let timeLeft = rest - lunchTime - recreationTime;

    if (timeLeft >= duration) {
        let leftOverTime = Math.ceil(timeLeft - duration);
        console.log(`You have enough time to watch ${name} and left with ${leftOverTime} minutes free time.`);

    } else {
        let neededTime = Math.ceil(duration - timeLeft);
        console.log(`You don't have enough time to watch ${name}, you need ${neededTime} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"])

