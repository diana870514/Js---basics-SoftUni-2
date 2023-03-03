function sum2Numbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let hasCombination = false;
    for (let x = start; x <= end; x++){
        for(let y = start; y <= end; y++){
            count++;
            if(x + y === magicNumber){
                hasCombination = true;
                console.log(`Combination N:${count} (${x} + ${y} = ${magicNumber})`);
                break;
            }

        }
        if(hasCombination){
            break;
           
        }
    
    } 
    if(!hasCombination){
    console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
   

}
sum2Numbers(["1","10","5"]);
sum2Numbers(["88", "888", "1000"]);