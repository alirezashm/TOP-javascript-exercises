const sumAll = function (min = 1, max = 10) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
