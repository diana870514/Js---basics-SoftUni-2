function cinemaTicket(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studenTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;



    while (command !== 'Finish') {
        let movieTitle = command;

        let freeSpaces = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let spaceTaken = 0;
        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'student') {
                studenTicket++;
            } else if (ticketType === 'standard') {
                standardTicket++;
            } else {
                kidTicket++;
            }

            spaceTaken++;

            if (spaceTaken === freeSpaces) {
                break;
            }
            command1 = input[index];
            index++;
        }
        let percentFull = (spaceTaken / freeSpaces) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = studenTicket + standardTicket + kidTicket;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studenTicket / totalTickets) * 100;
    let standardTicketsPercent = (standardTicket / totalTickets) * 100;
    let kidTicketTicketPercent = (kidTicket / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketTicketPercent.toFixed(2)}% kids tickets.`);




}
cinemaTicket(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);

