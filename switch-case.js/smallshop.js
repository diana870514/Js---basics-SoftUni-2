 /*/град / продукт coffee water beer sweets peanuts

           Sofia 0.50 0.80 1.20 1.45 1.60
 
           Plovdiv 0.40 0.70 1.15 1.30 1.50
 
           Varna 0.45 0.70 1.10 1.35 1.55*/

function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let sum = 0;
    

   if (town == "Sofia"){
    if(product == "coffee"){
        sum = quantity * 0.50;
        console.log(sum);

    }else if(product == "water"){
        sum = quantity * 0.80;
        console.log(sum);
    }else if(product == "beer"){
        sum = quantity * 1.20;
        console.log(sum);
    }else if(product == "sweets"){
        sum = quantity * 1.45;
        console.log(sum);
    }else if(product == "peanuts"){
        sum = quantity * 1.60;
        console.log(sum);
    }
}else if(town == "Plovdiv"){
        if(product == "coffee"){
            sum = quantity * 0.40;
            console.log(sum);
        }else if (product == "water"){
            sum = quantity * 0.70;
            console.log(sum);
        }else if(product == "beer"){
            sum = quantity * 1.15;
            console.log(sum);
        }else if(product == "sweets"){
            sum = quantity * 1.30;
            console.log(sum);
        }else if(product == "peanuts"){
            sum = quantity * 1.50;
            console.log(sum);
        }
    }else if (town == "Varna"){
        if(product == "coffee"){
            sum = quantity * 0.45;
            console.log(sum);
        }else if(product == "water"){
            sum = quantity * 0.70;
            console.log(sum);
        }else if(product == "beer"){
            sum = quantity * 1.10;
            console.log(sum);
        }else if(product == "sweets"){
            sum = quantity * 1.35;
            console.log(sum);
        }else if (product == "peanuts"){
            sum = quantity * 1.55;
            console.log(sum);
        }
    }
   }
        
    

smallShop(['coffee','Varna','2']);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);


