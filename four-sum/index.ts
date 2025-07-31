function fourSum(nums: number[], target: number): number[][] {
    let result: number[][] = [];
    let set = new Set<string>();
    for (let w = 0; w < nums.length-3; w++) {
        for (let x = w+1; x < nums.length-2; x++) {
            for (let y = x+1; y < nums.length-1; y++) {
                for (let z = y+1; z < nums.length; z++) {
                    if (w !== x && w !== y && w !== z && x !== y && x !== z && y !== z) {
                        let sum = nums[w] + nums[x] + nums[y] + nums[z];
                        if (sum == target) {
                            let quadripled = [nums[w], nums[x], nums[y], nums[z]].sort((a, b) => a - b);
                            let key = quadripled.join(',');
                            if (!set.has(key)) {
                                result.push(quadripled);
                                set.add(key)
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
console.log(fourSum([1, 2, 3, 4], 100));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-3, -1, 0, 2, 4, 5], 2));
console.log(fourSum([1,1,1,1,1,1,1,1,1,1,1,1,1], 4));
