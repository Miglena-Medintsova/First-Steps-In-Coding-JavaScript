function cinemaeTicket(input) {
    let day = input[0];
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday": console.log(12); break;
        case "Wednesday":
        case "Thursday": console.log(14); break;
        case "Saturday":
        case "Sunday": 
        default: console.log(16); break
    }
}
cinemaeTicket(["Sunday"])
