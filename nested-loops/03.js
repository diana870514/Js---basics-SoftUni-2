function magicNumbers(input){
    let n = Number(input[0]);
    let validationCount = 0;

    for(let x1 = 0;x1 <= n; x1++){
       
        for(let y1 = 0; y1 <= n; y1++){
           
            for(let x3 = 0;x3 <= n; x3++){
                if(x1 + y1 + x3 === n){
                    validationCount++;
                }
               
                
                

            }
        }

    }
    console.log(`${validationCount}`);
                

}
magicNumbers(['25']);