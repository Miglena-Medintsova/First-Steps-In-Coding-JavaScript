function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hour * 60 + minutes + 15;

    let hours = Math.floor(totalMinutes / 60);
    let mins =totalMinutes % 60;

    if (hours === 24) {
        hours = 0;
    }
if (mins < 10) {
    console.log(`${hours}:0${mins}`);

} else {
    console.log(`${hours}:${mins}`);
}
}
timePlus15Minutes(["0", "01"])