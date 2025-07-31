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
// trianglePattern();
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
// reverseTrianglePattern();
/*
Output:

*****
****
***
**
*

*/
function numberTrianglePattern() {
    for (let x = 1; x <= 5; x++) {
        let pattern = '';
        console.log('Each Time: ', pattern);
        for (let y = 1; y <= x; y++) {
            pattern += y;
            console.log('Inner Loop: ', pattern);
        }
        console.log(pattern);
    }
}
// numberTrianglePattern()
// 1
// 12
// 123
// 1234
// 12345
function numberTrianglePatternReveresed() {
    for (let x = 5; x >= 1; x--) {
        let pattern = '';
        for (let y = 1; y <= x; y++) {
            pattern += y;
        }
        console.log(pattern);
    }
}
numberTrianglePatternReveresed();
