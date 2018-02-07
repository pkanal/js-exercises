// Use Array.prototype.reduce to implement a simple version of Array.prototype.map.

const numbers = [1, 2, 3, 4, 5];

// array is numbers, fn is double function

const map = (array, fn) => {

  return numbers.reduce((acc, curr) => {

  }, []);
};

const double = x => x * 2;

console.log(map(numbers, double));
// [2, 3, 6, 8, 10]

module.exports = map;
