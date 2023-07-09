const findTheOldest = function(array) {
	let oldest = array.sort((a,b) => {
		const last = a.yearOfDeath - a.yearOfBirth;
		const next = b.yearOfDeath - b.yearOfBirth;
		return last > next ? -1 : 1;
	})
	return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
