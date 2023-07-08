const fibonacci = function(number) {
    if (number <= 0) return "OOPS";    
    const fibStart = [0, 1];
    for (let i = 1; i < number; i++){
        fibStart.push(fibStart[i] + fibStart[i - 1]);
    }
    return fibStart[number];
};

// Do not edit below this line
module.exports = fibonacci;
