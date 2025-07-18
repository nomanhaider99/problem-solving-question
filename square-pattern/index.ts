function squarePattern () {
    for (let x = 1; x <= 4; x++) {
        let pattern = "";
        for (let y = 1; y <= 4; y++) {
            if (x == 2 || x == 3) {
                if (y == 1 || y == 4) {
                    pattern += "*";
                } else {
                    pattern += " ";
                }
            } else {
                pattern += "*";
            }
        }
        console.log(pattern);
    }
}

squarePattern()

/*
Output: 

    ****
    *  *
    *  *
    ****

*/