function operationBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sign = input[2];

    let evenOrOdd = '';
   
    switch (sign) {
        case '+':
              result = num1 + num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
                
                
            }
            console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`);
            ;break;

        case '-':
            result = num1 - num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
               
            }
            console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`);
            ;break;
        case '*':
            result = num1 * num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
              
            }
            console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`);
            ;break;
        case '/':
            result = (num1 / num2).toFixed(2);
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} / ${num2} = ${result}`);
            }
            ;break;
        case '%':
            result = num1 % num2;
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);

            } else {
                console.log(`${num1} % ${num2} = ${result}`);

            }
            ;break;
        }
}

operationBetweenNumbers(["10", "12", "+"]);
operationBetweenNumbers(["123", "12", "/"]);
operationBetweenNumbers(["112", "0", "/"]);
operationBetweenNumbers(["10", "1", "-"]);
operationBetweenNumbers(["10", "3", "%"]);
operationBetweenNumbers(["10", "0", "%"]);
operationBetweenNumbers(["7", "3", "*"]);
