"use strict";
function longestPalindrome(s) {
    let palindromes = [];
    for (let x = 0 - 1; x < s.length; x++) {
        for (let y = s.length; y >= x; y--) {
            if (s.slice(x, y) === s.slice(x, y).split('').reverse().join('')) {
                palindromes.push(s.slice(x, y));
            }
        }
    }
    let longest = palindromes[0];
    for (let i in palindromes) {
        if (palindromes[i].length > longest.length) {
            longest = palindromes[i];
        }
    }
    return longest;
}
;
console.log(longestPalindrome('noonmadamstats'));
