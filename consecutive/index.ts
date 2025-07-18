function isConsecutive(arr1: number[], arr2: number[]): boolean {
    let combinedArray = arr1.concat(arr2).sort((a, b) => a-b);
    let result: number[] = [combinedArray[0]];

    let finalOutput: boolean = false;
    
    for (let x = 1; x < combinedArray.length; x++) {
        if (result.includes(combinedArray[x])) {
            finalOutput = false;
            break;
        } else {
            result.push(combinedArray[x]);
            let expectedNumber = combinedArray[x-1]+1;
            if (combinedArray[x] == expectedNumber) {
                finalOutput = true;
            } else {
                finalOutput = false;
            }
        }
    }
    return finalOutput;
}

console.log(isConsecutive([2, 6], [4, 3, 6, 5])); // [2, 3, 4, 5, 6]  