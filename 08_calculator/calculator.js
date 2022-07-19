const add = function(a, b) {
	let total = a + b;
  return total;
};

const subtract = function(a, b) {
	let total = a - b;
  return total;
};

const sum = function(nums) {
	return nums.reduce((total, current) => total + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	if(n === 0) {
    return 1;
  }
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
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
