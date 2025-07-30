function maximumProduct(arr: number[]) {
    var multipleOfThree = arr[0] * arr[1] * arr[2];
    for (let x = 0; x < arr.length; x++) {
        for (let y = 1; y < arr.length; y++) {
            for (let z = 2; z < arr.length; z++) {
                if (x !== y && x !== z && y !== z) {
                    const multiple = arr[x] * arr[y] * arr[z];
                    console.log(arr[x], arr[y], arr[z], " = ", arr[x] * arr[y] * arr[z])
                    if (multiple >= multipleOfThree) {
                        multipleOfThree = multiple;
                    }
                }
            }
        }
    }

    return multipleOfThree;
}

console.log(maximumProduct([-5, -4, -3, -2, -1]));