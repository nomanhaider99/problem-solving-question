function checkDisarium(num: number) {
    let result: number = 0;
    let stringedNumber: string = String(num);
    for (let x = 0; x < stringedNumber.length; x++) {
        result += Number(stringedNumber[x])**(x+1);
    } 
    if (num == result) {
        return "Disarium";
    } else {
        return "Not a Disarium";
    }
}

console.log(checkDisarium(412));

// 89
// 8**1 + 9**2 = 8 + 81 = 89

// 4**1 + 1**2 + 2**3 = 4 + 1x1 + 8 = 13