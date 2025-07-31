"use strict";
function findMedianSortedArrays(nums1, nums2) {
    let combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let result = 0;
    if (combinedArray.length % 2 !== 0) {
        result = Number(combinedArray.slice((combinedArray.length / 2), (combinedArray.length / 2) + 1));
    }
    else {
        let slicedElements = combinedArray.slice((combinedArray.length / 2) - 1, (combinedArray.length / 2) + 1);
        let sumOfTwo = 0;
        for (let i = 0; i < slicedElements.length; i++) {
            sumOfTwo += slicedElements[i];
        }
        result = sumOfTwo / 2;
    }
    return result;
}
;
console.log(findMedianSortedArrays([1, 3, 4], [2]));
