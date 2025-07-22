"use strict";
const ones = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
];
const teens = [
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
];
const tens = [
    "ten", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
];
const millions = [
    "million", "billion", "trillion", "quadrillion", "quintillion",
    "sextillion", "septillion", "octillion", "nonillion", "decillion",
    "undecillion", "duodecillion", "tredecillion", "quattuordecillion",
    "quindecillion", "sexdecillion", "septendecillion", "octodecillion",
    "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion",
    "trevigintillion", "quattuorvigintillion", "quinvigintillion",
    "sexvigintillion", "septenvigintillion", "octovigintillion",
    "novemvigintillion", "trigintillion", "untrigintillion",
    "duotrigintillion", "tretrigintillion", "quattuortrigintillion",
    "quintrigintillion", "sextrigintillion", "septentrigintillion"
];
function convertIntoChunks(num) {
    const stringedNumber = num.toString();
    const chunks = [];
    for (let x = stringedNumber.length; x > 0; x -= 3) {
        if (stringedNumber.slice(x - 3, x).length !== 3) {
            chunks.unshift((Number(stringedNumber.slice(0, x))));
        }
        else {
            chunks.unshift(Number(stringedNumber.slice(x - 3, x)));
        }
    }
    return chunks;
}
function numberToWords(num) {
    const chunks = convertIntoChunks(num);
    let wordedChunks = [];
    let words = "";
    for (let i = chunks.length - 1; i >= 0; i--) {
        const stringedChunks = chunks[i].toString();
        console.log(stringedChunks);
    }
}
numberToWords(123456);
