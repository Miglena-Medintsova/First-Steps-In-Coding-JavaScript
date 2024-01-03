function onTimeForTheExam(input) {
 
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
 
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);
 
    let late = 'Late';
    let onTime = 'On time';
    let early = 'Early';
 
    let examTime = (hour * 60) + minutes;
    let arrivalTime = (arriveHour * 60) + arriveMinutes;
    let difference =0;
    let hh=0;
    let mm=0;
    difference=Math.abs(arrivalTime-examTime);
 
    if (arrivalTime>examTime) {
        
        if (difference <60) {
            console.log(late);
            console.log(`${difference} minutes after the start`);
        }else if (difference>=60) {
            hh++;
            mm=difference-60;
            if(mm<9){
                console.log(late);
                console.log(`${hh}:0${mm} hours after the start`);
            }else {
                console.log(late);
                console.log(`${hh}:${mm} hours after the start`);
            }
            
        }
 
    }else if(arrivalTime<examTime && difference<=30){
 
        console.log(onTime);
        console.log(`${difference} minutes before the start`)   
          
    }else if(arrivalTime==examTime){
        console.log(onTime);
 
    }else if(arrivalTime<examTime && difference>30){
        console.log(early)
        if(difference>30 && difference<60){
            console.log(`${difference} minutes before the start`) 
        }else if(difference>59){
 
            mm=difference%60;
            hh=difference/60;
            if (mm>9) {
                console.log(`${Math.floor(hh)}:${mm} hours before the start`);
 
            }else if(mm<9){
                console.log(`${Math.floor(hh)}:${'0'}${mm} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["9", "30", "9", "50"])
