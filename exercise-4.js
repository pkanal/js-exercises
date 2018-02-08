// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

// array.reduce((acc, curr) => {
//  return
// }, init )
const reduce = (array, fn, init) => {
    if (!array.length) {
        return init;
    }
    let total = fn(init, array[0]);
    return reduce(array.splice(1, array.length), fn, total)
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;
