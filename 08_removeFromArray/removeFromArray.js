const removeFromArray = function (haystack = []) {
    const args = Array.from(arguments);
    return haystack.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
