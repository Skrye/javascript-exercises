function sumAll(intOne, intTwo) {
    if ((intOne >= -1 && intTwo >= -1) && (typeof intOne === "number" && typeof intTwo === "number")) {
        let max = Math.max(intOne, intTwo);
        let min = Math.min(intOne, intTwo);
        let sumBetween = 0;
        for (let i = min; i <= max; i++) {
            sumBetween += i;
        }
        return sumBetween;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
