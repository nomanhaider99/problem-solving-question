const ones = [
  "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
];

const teens = [
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
];

const tens = [
  "", "ten", "twenty", "thirty", "forty", "fifty",
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
  let chunks = [];
  let words: string[] = [];
  if (num == 0) {
    words.unshift("zero");
  }
  else if (num > 0 && num <= 10) {
    words.unshift(ones[num]);
  }
  else if (num > 10 && num <= 20) {
    words.unshift(teens[num - 11]);
  }
  else if (num > 20) {
    const stringed = num.toString();

    for (let x = stringed.length; x > 0; x -= 3) {
      if ((stringed.slice(x - 3, x)).length === 3) {
        chunks.unshift(stringed.slice(x - 3, x));
      } else {
        chunks.unshift(stringed.slice(0, x));
      }
    }

    for (let i = chunks.length - 1; i >= 0; i--) {
      if (chunks[i].length === 3) {
        if (Number(chunks[i][1] + chunks[i][2]) >= 10 && Number(chunks[i][1] + chunks[i][2]) <= 20) {
          words.unshift(ones[Number(chunks[i][0])] + " hundred " + teens[Number(chunks[i][1] + chunks[i][2]) - 11] + " " + millions[(chunks.length - i) - 1]);
        } else {
          words.unshift(ones[Number(chunks[i][0])] + " hundred " + tens[Number(chunks[i][1])] + " " + ones[Number(chunks[i][2])] + " " + millions[(chunks.length - i) - 1]);
        }
      } else if (chunks[i].length === 2) {
        words.unshift(tens[Number(chunks[i][0])] + " " + ones[Number(chunks[i][1])] + " " + millions[(chunks.length - i) - 1]);
      } else {
        words.unshift(ones[Number(chunks[i][0])] + " " + millions[(chunks.length - i) - 1]);
      }
    }

  }
  return words.join(" ");
}

console.log(numberToWords(299399929979919));