"use strict";
var inputString = "racecarxyzmadamabc"; // Output: racecar 
var longest = "";
function checkLogestPalindrome() {
    for (var x = 0; x <= inputString.length; x++) {
        for (var y = inputString.length; y > 1; y--) {
            var slicedString = inputString.slice(x, y);
            var reversedString = slicedString.split("").reverse().join("");
            if (slicedString.length >= 2) {
                if (slicedString == reversedString) {
                    if (slicedString.length > longest.length) {
                        longest = slicedString;
                    }
                }
            }
        }
    }
    return longest;
}
console.log(checkLogestPalindrome());
