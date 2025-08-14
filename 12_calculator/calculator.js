const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => total = add(curr, total), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total *= curr, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(val) {
  if (val == 0) return 1;
  return val * factorial(val - 1);
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
