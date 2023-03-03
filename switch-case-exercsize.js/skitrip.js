function skiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let stay = days - 1;
    let price = 0;




    switch (typeRoom) {
        case 'apartment':
            price = 25 * stay;
            if (days > 10 && days < 15) {
                price *= 0.65;
            } else if (days < 10) {
                price *= 0.70;
            } else {
                price *= 0.50;
            }
            ; break;
        case 'president apartment':
            price = 35 * stay;
            if (days > 10 && days < 15) {
                price *= 0.90;
            } else if (days < 10) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            ;break;
        case 'room for one person':
        price = 18 * stay;
        ;break;
    }  
    if (rating == 'positive'){
        price *= 1.25;

    }else{
        price *= 0.90;
    }
    console.log(price.toFixed(2));



}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);

/*"room for one person" – 18.00 лв за нощувка

§ "apartment" – 25.00 лв за нощувка

§ "president apartment" – 35.00 лв за нощувка*/