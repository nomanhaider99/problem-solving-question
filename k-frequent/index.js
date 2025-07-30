"use strict";
function topKFrequent(nums, k) {
    let mostFrequent = [];
    let frequent = {};
    for (let x = 0; x < nums.length; x++) {
        if (!(nums[x] in frequent)) {
            frequent[nums[x]] = 1;
        }
        else {
            frequent[nums[x]] += 1;
        }
    }
    let keys = [];
    for (let key in frequent) {
        keys.push(Number(key));
    }
    keys.sort((a, b) => frequent[b] - frequent[a]);
    for (let i = 0; i < k; i++) {
        mostFrequent.push(keys[i]);
    }
    return mostFrequent;
}
;
console.log(topKFrequent([9, 8, 7, 6, 9, 8, 7], 3));
