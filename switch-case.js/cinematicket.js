function cinemaTicket(input){
    let day = input[0];
    switch(day){
        case 'Monday': console.log('12');break;
        case 'Tuesday': console.log('12');break;
        case 'Wednesday': console.log('14');break;
        case 'Thursday': console.log('14');break;
        case 'Friday': console.log('12');break;
        case 'Saturday': console.log('16');break;
        default:console.log('16');break;

    }

   


}
cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);
/*Monday Tuesday Wednesday Thursday Friday Saturday Sunday

12 12 14 14 12 16 16*/