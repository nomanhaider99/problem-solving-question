"use strict";
// Given an array of nums and target of num, return indeices of two nums such that add ups to target.
function indexAddToTarget(nums, target) {
    let result = false;
    for (let x = 0; x < nums.length; x++) {
        for (let i = 1; i < nums.length; i++) {
            if (x !== i) {
                const sum = nums[x] + nums[i];
                if (sum == target) {
                    return [x, i];
                }
            }
        }
    }
}
console.log(indexAddToTarget([1, 0, 24, 6, 9], 24));
