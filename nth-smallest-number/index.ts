function findNthSmallestNumber (n: number, arr: number[]) {
    var nthSmallest;
    const sortedArray = arr.sort((a, b) => a-b);
    for (let x = 0; x < arr.length; x++) {
        if (x == n) {
            nthSmallest = sortedArray[x-1];
        }
    }

    return nthSmallest;
}

console.log(findNthSmallestNumber(3, [5, 4, 2, 1, 3]));