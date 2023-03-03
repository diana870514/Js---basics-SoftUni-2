function piramidNumbers(input) {
    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let currentLine = "";



    for (let rows = 1; rows <= n; rows++) {
        for (let column = 1; column <= rows; column++) {
            if (current > n) {
                isBigger = true;
                break;

            }
            currentLine += current + " ";
            current++;


        }

        console.log(currentLine);
        currentLine = "";
        if (isBigger) {
            break;
        }



    }
}
piramidNumbers(["7"]);