function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = length * width * high;

    let litersVolume = aquariumVolume * 0.001;

    let neededLitres = litersVolume * (1 - 0.17);
    
    console.log(neededLitres)
}

fishTank(["85","75","47", "17"])