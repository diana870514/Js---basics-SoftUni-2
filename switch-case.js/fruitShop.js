function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let price = Number(input[2]);
    let sum = 0;
    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
       
     if(product == 'banana') {
            sum = price * 2.50;
            console.log(sum.toFixed(2));

        } else if (product == 'apple') {
            sum = price * 1.20;
            console.log(sum.toFixed(2));
        } else if (product == 'orange') {
            sum = price * 0.85;
            console.log(sum.toFixed(2));
        } else if (product == 'grapefruit') {
            sum = price * 1.45;
            console.log(sum.toFixed(2));

        } else if (product == 'kiwi') {
            sum = price * 2.70;
            console.log(sum.toFixed(2));
        } else if (product == 'pineapple') {
            sum = price * 5.50;
            console.log(sum.toFixed(2));
        } else if (product == 'grapes') {
            sum = price * 3.85;
            console.log(sum.toFixed(2));
        }else{
            console.log('error');
        }
        
    }else  if (day == 'Saturday' || day == 'Sunday'){
    if (product == 'banana') {
            sum = price * 2.70;
            console.log(sum.toFixed(2));
        } else if (product == 'apple') {
            sum = price * 1.25;
            console.log(sum.toFixed(2));
        } else if (product == 'orange') {
            sum = price * 0.90;
            console.log(sum.toFixed(2));
        } else if (product == 'grapefruit') {
            sum = price * 1.60;
            console.log(sum.toFixed(2));
        } else if (product == 'kiwi') {
            sum = price * 3.00;
            console.log(sum.toFixed(2));
        } else if (product == 'pineapple') {
            sum = price * 5.60;
            console.log(sum.toFixed(2));
        } else if (product == 'grapes') {
            sum = price * 4.20;
            console.log(sum.toFixed(2));


        }else{
            console.log('error');
        }
    }else{
        console.log('error');
    }
}
    
  
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);