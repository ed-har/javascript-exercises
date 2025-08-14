const sumAll = function (min, max) {
    if (!Number.isInteger(min)
        || !Number.isInteger(max)
        || min < 0
        || max < 0) return 'ERROR';
    if (min > max) [min, max] = [max, min];

    let sum = 0;
    while (max >= min) {
        sum += min;
        min++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
