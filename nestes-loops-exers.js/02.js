function numbersEveneOdd(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let result = '';
    for (let curNum = firstNumber; curNum <= secondNumber; curNum++) {
        let odd = 0;
        let even = 0;

        let curtNumStr = curNum.toString();


        for (let i = 0; i < curtNumStr.length; i++) {
            let curNumber = Number(curtNumStr[i]);

            let position = i + 1;
            if (position % 2 === 0) {
                even += curNumber;
            } else {
                odd += curNumber;
            }
        }
        if (odd === even) {
            result += curtNumStr + ' ';

        }

    }
    console.log(result)
}
numbersEveneOdd(["100000", "100050"]);