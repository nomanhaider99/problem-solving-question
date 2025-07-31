function lengthOfLongestSubstring(s: string): number {
    let pairs = [];
    let pair: string = '';
    for (let x = 0; x < s.length; x++) {
        const char = s[x];

        if (!pair.includes(char)) {
            pair += char;
        } else {
            const duplicateIndex = pair.indexOf(char);
            pair = pair.slice(duplicateIndex + 1) + char;
        }

        pairs.push(pair);
    }

    let longest = 0;
    for (let x in pairs) {
        if (pairs[x].length > longest) {
            longest = pairs[x].length;
        }
    }

    // console.log(pairs);
    return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdf'));