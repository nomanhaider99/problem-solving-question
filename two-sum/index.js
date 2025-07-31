"use strict";
function twoSum(nums, target) {
    let result = [];
    for (let x = 0; x < nums.length; x++) {
        for (let y = 1; y < nums.length; y++) {
            if (x !== y) {
                if ((nums[x] + nums[y]) === target) {
                    result = [x, y];
                }
            }
        }
    }
    return result;
}
;
console.log(twoSum([3, 3], 6));
