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

console.log(checkDisarium(172));