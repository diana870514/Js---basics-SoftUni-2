function hotelRoom(input) {
    let season = input[0];
    let nights = Number(input[1]);

    priceStudio = 0;
    priceApartment = 0;

    switch(season){
        case 'May':
        case 'Octomber':
            if(nights > 7 && nights < 14){
                priceStudio = (nights * 50) * 0.95;
            }else if( nights > 14){
                priceStudio = (nights * 50) * 0.70;
            }else{
                priceStudio = nights * 50;
            }
            if(nights > 14){
                priceApartment = (nights * 65) * 0.90;
            }else{
                priceApartment = nights * 65;
            }
            ;break;
        case 'June':
        case 'September':
            if(nights > 14){
                priceStudio = (nights * 75.20) * 0.80;
            }else{
                priceStudio = nights * 75.20;
            }
            if( nights > 14){
                priceApartment = (nights * 68.70) * 0.90;
            }else{
                priceApartment = nights * 68.70;
            }
            ;break;
        case 'July':
        case 'August':
            priceStudio = nights * 76;
           
            if(nights > 14){
                priceApartment = (nights * 77) * 0.90;
            }else{
                priceApartment = nights * 77;
            }
            ;break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

    




hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);