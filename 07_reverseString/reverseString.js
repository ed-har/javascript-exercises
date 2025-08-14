const reverseString = function(string) {
    let arr = string.split("");
    let reverseArr = [];
    for (let index = arr.length - 1; index >= 0 ; index--) {
        reverseArr.push(arr[index]);
    }
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
