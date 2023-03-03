function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place = '';
    let destination = '';

    if (budget <= 100) {
        if (season == 'summer') {
            destination = 'Bulgaria';
            place = 'Camp';
            budget *= 0.30;
        } else if (season == 'winter') {
            destination = 'Bulgaria';
            place = 'Hotel';
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        if (season == 'summer') {
            destination = 'Balkans';
            place = 'Camp';
            budget *= 0.40;
        } else if (season == 'winter') {
            destination = 'Balkans';
            place = 'Hotel';
            budget *= 0.80;
        } else {
            destination = 'Europe';
            place = 'Hotel';
            budget *= 0.90;
        }
    } else {
        destination = 'Europe';
        place = 'Hotel';
        budget *= 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}











journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);



