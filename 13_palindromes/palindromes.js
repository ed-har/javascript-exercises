const palindromes = function (string) {
    const symbols = [" ", "!", ".", "?", ','];
    const rawString = string.toLowerCase().split('').filter(char => !symbols.includes(char)).join("");
    const reverseString = rawString.split('').reverse().join("");
    return (rawString == reverseString) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
