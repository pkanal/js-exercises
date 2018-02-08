// Use Array.prototype.reduce to implement a simple version of Array.prototype.map.

/*
Original to compare to
const numbers = [1, 2, 3, 4, 5];

const map = (array, fn) => {
  // your solution here
};

const double = x => x * 2;

console.log(map(numbers, double));
// [2, 3, 6, 8, 10]

module.exports = map;
*/

const numbers = [1, 2, 3, 4, 5];

const map = (array, fn) => {

  return array.reduce((acc, val) => {
    //https://docs.microsoft.com/en-us/scripting/javascript/reference/spread-operator-decrement-dot-dot-dot-javascript
    // return acc.concat(fn(val));
    // Thanks to Caroline Golinski's tip, so refactored to this:
    return [...acc, fn(val)]
  }, []);
};

const double = x => x * 2;

console.log(map(numbers, double));
// [2, 4, 6, 8, 10]

module.exports = map;
