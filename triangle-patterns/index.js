"use strict";
function trianglePattern() {
    for (let x = 1; x <= 5; x++) {
        let pattern = "";
        for (let y = 1; y <= x; y++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}
trianglePattern();
/*
Output:
*
**
***
****
*****

*/
function reverseTrianglePattern() {
    for (let x = 1; x <= 5; x++) {
        let pattern = "";
        for (let y = 5; y >= x; y--) {
            pattern += "*";
        }
        console.log(pattern);
    }
}
reverseTrianglePattern();
/*
Output:

*****
****
***
**
*

*/ 
