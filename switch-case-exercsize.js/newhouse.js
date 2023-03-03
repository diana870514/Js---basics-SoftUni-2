/*цвете	Роза	Далия	Лале	Нарцис	Гладиола
Цена на	5	3.80	2.80	3	2.50*/
/*Съществуват следните отстъпки:
Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%*/



function newHouse(input) {
    let typeFlower = input[0];
    let quantityFlower = Number(input[1]);
    let budget = Number(input[2]);

   let priceRoses = quantityFlower * 5;
   let priceDahlia =  quantityFlower * 3.80;
   let priceTulip = quantityFlower * 2.80;
   let priceNarcissus = quantityFlower * 3;
   let priceGladiola = quantityFlower * 2.50;
    total = 0;

switch(typeFlower){
    case 'Roses':
        if(quantityFlower > 80){
            total = priceRoses * 0.90;
        }else{
            total = priceRoses;
        }
        ;break;
    case 'Dahlias':
        if(quantityFlower > 90){
            total = priceDahlia * 0.85;
        }else{
            total = priceDahlia;
        }
        ;break;
    case 'Tulips':
        if(quantityFlower > 80){
           
            total =  priceTulip * 0.85;
        }else{
            total = priceTulip;
        }
        ;break;
    case 'Narcissus':
        if(quantityFlower < 120){
            total =  priceNarcissus * 1.15;

        }else{
            total = priceNarcissus;
        }
        ;break;
    case 'Gladiolus':
        if(quantityFlower < 80){
           
            total = priceGladiola * 1.20;
        
            
        }else{
            total =  priceGladiola;
        }
        ;break;
}
if(total > budget){
    sumNeeded = total - budget;
    console.log(`Not enough money, you need ${sumNeeded.toFixed(2)} leva more.`);

}else{
    sumLeft = budget - total;
    console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${sumLeft.toFixed(2)} leva left.`)
}
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);

