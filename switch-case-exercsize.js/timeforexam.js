function timeForExam(input) {
    let startExam = Number(input[0]);
    let startMinuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

    let examHour = (startExam * 60) + startMinuteExam;
    let timeArrivel = (hourArrival * 60) + minuteArrival;
    let diffMin = Math.abs(examHour - timeArrivel);
    let hours = Math.floor(diffMin / 60);
    let minutes = diffMin % 60;

    if (examHour === timeArrivel) {
        console.log('On time');
    } else if (examHour < timeArrivel) {
        console.log('Late');

        if (diffMin < 60) {
            console.log(`${diffMin} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);

            }
        }
    } else {
        if (diffMin <= 30) {
            console.log('On time');
            console.log(`${diffMin} minutes before the start`);
        } else {
            console.log('Early');
            if (diffMin < 60) {
                console.log(`${diffMin} minutes before the start`);
            } else {
                if (diffMin > 10) {
                    
                    console.log(`${hours}:${minutes} hours before the start`);
                } else {
                    console.log(`${hours}:0${minutes} hours before the start`);
                    

                }



            }

        }
    }
}






timeForExam(["16","00","15","00"]);
timeForExam(["9",
"30",
"9",
"50"])
timeForExam(["11",
"30",
"10",
"55"])
timeForExam(["14",
"00",
"13",
"55"])
timeForExam(["11",
"30",
"8",
"12"])








