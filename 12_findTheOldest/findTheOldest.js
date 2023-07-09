const findTheOldest = function(array) {
	let date = new Date();
	let morgue = JSON.parse(JSON.stringify(array));
	for (let i = 0; i < array.length; i++) {
		if (morgue[i].yearOfDeath == undefined) {
			morgue[i].yearOfDeath = date.getFullYear();
		}
	}
	let oldest = morgue.sort((a,b) => {
		const last = a.yearOfDeath - a.yearOfBirth;
		const next = b.yearOfDeath - b.yearOfBirth;
		return last > next ? -1 : 1;
	})
	return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
