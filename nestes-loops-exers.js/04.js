function trainTheTrainers(input) {
    let index = 0;
    let numGrade = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalGrade = 0;
    let presentationCount = 0;


    while (command !== 'Finish') {
        let presentation = command;
        let gradeSum = 0;
        for (let curGrade = 1; curGrade <= numGrade; curGrade++) {
            let curGradeNum = Number(input[index]);
            index++;
            gradeSum += curGradeNum;
        }
        let averGrade = gradeSum / numGrade;
        console.log(`${presentation} - ${averGrade.toFixed(2)}.`);

        totalGrade += averGrade;
        presentationCount++;

        command = input[index];
        index++;
    }


    let totalAverGRade = totalGrade / presentationCount;

    console.log(`Student's final assessment is ${totalAverGRade.toFixed(2)}.`);




}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
