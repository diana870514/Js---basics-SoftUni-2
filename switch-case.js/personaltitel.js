function personalTitle(index){
    let age = Number(index[0]);
    let gender = index[1];
    
    if(gender=='f'){
            if(age>=16){
            console.log('Ms.');
        }else{
            console.log('Miss');
        }
    }
    else{
        if(age>=16){
                console.log('Mr.');
            }else{
                console.log('Master');
            }
        }
    }


personalTitle(['12','f']);
personalTitle(['17','m']);
personalTitle(['25','f']);
personalTitle(['13.5','m']);




