function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let persons = Number(input[2]);
    let rentForSheep = 0;


    switch (season) {
        case 'Spring':
            rentForSheep = 3000;
            ;break;
        case 'Summer':
        case 'Autumn':
            rentForSheep = 4200;
            ; break;
        case 'Winter':
            rentForSheep = 2600;
            ; break;
    }
    if (persons <= 6) {
        rentForSheep *= 0.90;

    } else if (persons > 7 && persons <= 11) {
        rentForSheep *= 0.85;


    } else {
        rentForSheep *= 0.75;
    }
    if (season !== 'Autumn' && persons % 2 === 0) {
        rentForSheep *= 0.95;
    }
    if (budget >= rentForSheep) {
        moneyLeft = budget - rentForSheep;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyNeed = rentForSheep - budget;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);

