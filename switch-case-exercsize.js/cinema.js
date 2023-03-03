function cinema(input){
    let projection = input[0];
    let row = Number(input[1]);
    let cols = Number (input[2]);

    let allPlaces = row * cols;
    sum = 0;
    if (projection == 'Premiere'){
   sum = allPlaces * 12;
   console.log(`${sum.toFixed(2)} leva`);
    }else if(projection == 'Normal'){
        sum = allPlaces * 7.50;
        console.log(`${sum.toFixed(2)} leva`);

    }else if(projection == 'Discount') {
        sum = allPlaces * 5.00;
        console.log(`${sum.toFixed(2)} leva`);
    }
   
   
    

}
cinema(['Premiere','10','12']);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);