const removeFromArray = function(array, ...elements) {
    return array.filter(n => !elements.includes(n))
};

// Do not edit below this line
module.exports = removeFromArray;
