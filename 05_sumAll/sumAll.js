function sumAll(intOne, intTwo) {
    let max = Math.max(intOne, intTwo);
    let min = Math.min(intOne, intTwo);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
};

// Do not edit below this line
module.exports = sumAll;
