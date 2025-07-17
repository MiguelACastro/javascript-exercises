const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }
    if(a < 0 || b < 0) {
        return "ERROR"
    }
    let lowerLimit = Math.min(a, b)
    let upperLimit = Math.max(a, b)
    
    let sum = 0
    for(let n = lowerLimit; n <= upperLimit; n++) {
        sum += n
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
