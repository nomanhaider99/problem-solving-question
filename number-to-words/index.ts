const ones = [
  " ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
];

const teens = [
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = [
  " ", "ten", "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];

const millions = [
  " ", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion",
  "sextillion", "septillion", "octillion", "nonillion", "decillion",
  "undecillion", "duodecillion", "tredecillion", "quattuordecillion",
  "quindecillion", "sexdecillion", "septendecillion", "octodecillion",
  "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion",
  "trevigintillion", "quattuorvigintillion", "quinvigintillion",
  "sexvigintillion", "septenvigintillion", "octovigintillion",
  "novemvigintillion", "trigintillion", "untrigintillion",
  "duotrigintillion", "tretrigintillion", "quattuortrigintillion",
  "quintrigintillion", "sextrigintillion", "septentrigintillion"
];

function numberToWords(num: number) {
  const stringedNumber = num.toString();
  let chunks = [];
  let wordsChunk = [];
  let words = '';

  for (let x = stringedNumber.length; x > 0; x -= 3) {
    if (stringedNumber.slice(x - 3, x).length == 3) {
      chunks.unshift(stringedNumber.slice(x - 3, x));
    } else {
      chunks.unshift(stringedNumber.slice(0, x));
    }
  }

  for (let i = chunks.length - 1; i >= 0; i--) {
    const stringedChunk = chunks[i];
    let word = '';
    if (chunks[i].includes('0')) {
      if (chunks[i].endsWith('0') && chunks[i].length == 3) {
        word = ones[Number(stringedChunk[0])] + " hundred " + tens[Number(stringedChunk[1])]
      } else if (chunks[i].endsWith('0') && chunks[i].length == 2) {
        word = tens[Number(stringedChunk[0])]
      } else if (chunks[i].startsWith('0')) {
        word = tens[Number(stringedChunk[1])] + " " + ones[Number(stringedChunk[2])];
      }
    } else {
      if (chunks[i].length == 2) {
        if (Number(chunks[i]) > 10 && Number(chunks[i]) < 20) {
        word = teens[Number(stringedChunk[1])-1];
      } else {
        word = ones[Number(stringedChunk[0])];
      }
      } else {
        word = ones[Number(stringedChunk[0])] + " hundred " + tens[Number(stringedChunk[1])] + " " + ones[Number(stringedChunk[2])];
      }
    }
    wordsChunk.unshift(word);
  }

  console.log(chunks)
  return wordsChunk;
}

console.log(numberToWords(115));