const add = function(total, num) {
	return total + num;
};

const subtract = function(total, num) {
	return total - num;
};

const sum = function(array) {
  let total = 0;
  for (let i = 0; i <array.length; i += 1) {
    total += array[i];
  }
  return total;
};

const multiply = function(...number) {
  let total = 1;
  for (let i = 0; i < number.length; i++) {
    total *= number[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let factorialStart = 1;
  let factorialCurrent = number;
  while (number > factorialStart) {
    factorialCurrent *= factorialStart;
    factorialStart++;
  }
  if (number > 0) {
    return factorialCurrent;
  } else {
    return 1;
  }
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
