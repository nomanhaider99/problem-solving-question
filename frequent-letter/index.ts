function mostFrequentChar (str: string) {
    const converted = str.toLowerCase();
    let repeated = '';
    let repeatedItems: any = {};

    for (let x = 0; x < converted.length; x++) {
        if (converted[x].includes(repeated)) {
            repeatedItems.a = 1
        } else {
            console.log('none')
        }
    }

    return repeatedItems;
}

console.log(mostFrequentChar('programming'));