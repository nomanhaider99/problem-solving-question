function isPalindrome(x: number): boolean {
    let reveresed = x.toString().split('').reverse().join('');
    if (x.toString() === reveresed) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(-121))