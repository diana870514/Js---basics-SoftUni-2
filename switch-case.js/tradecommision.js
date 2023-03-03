function tradeCommision(input){
    let town = input[0];
    let valueSells = Number(input[1]);

    let commision = 0;

    if(town == 'Sofia'){
        if(0 < valueSells && valueSells<= 500 ){
            commision = valueSells * 0.05;
            console.log(commision.toFixed(2));

        }else if(500 < valueSells && valueSells <= 1000){
            commision = valueSells * 0.07;
            console.log(commision.toFixed(2));
        }else if(1000 <= valueSells && valueSells <= 10000){
            commision = valueSells * 0.08;
            console.log(commision.toFixed(2));

        }else if (valueSells > 10000){
            commision = valueSells * 0.12;
            console.log(commision.toFixed(2));
        }else{
            console.log('error');
        }
    }else if(town == 'Varna'){
        if(0 <= valueSells && valueSells <= 500){
            commision = valueSells * 0.045;
            console.log(commision.toFixed(2));
        }else if(500 < valueSells && valueSells <= 1000){
            commision = valueSells * 0.075;
            console.log(commision.toFixed(2));
        }else if(1000 < valueSells && valueSells <=10000){
            commision = valueSells * 0.10;
            console.log(commision.toFixed(2));
        }else if(valueSells > 10000){
            commision = valueSells * 0.13;
            console.log(commision.toFixed(2));
        }else{
            console.log('error');
        }
    }else if (town == 'Plovdiv'){
        if(0 <= valueSells && valueSells <= 500){
            commision = valueSells * 0.055;
            console.log(commision.toFixed(2));
        }else if(500 < valueSells && valueSells <= 1000){
            commision = valueSells * 0.08;
            console.log(commision.toFixed(2));
        }else if(1000 < valueSells && valueSells <=10000){
            commision = valueSells * 0.12;
            console.log(commision.toFixed(2));
        }else if(valueSells > 10000){
            commision = valueSells * 0.145;
            console.log(commision.toFixed(2));
        }else{
            console.log('error');
        }
    }else{
        console.log('error');
    }


}
tradeCommision(["Sofia","1500"]);
tradeCommision(["Plovdiv","499.99"]);
tradeCommision(["Varna","3874.50"]);
tradeCommision(["Kaspichan", "-50"]);
/*Град 0 ≤ s ≤ 500 500 < s ≤ 1 000 1 000 < s ≤ 10 000 s > 10 000

Sofia 5% 7% 8% 12%

Varna 4.5% 7.5% 10% 13%

Plovdiv 5.5% 8% 12% 14.5%*/