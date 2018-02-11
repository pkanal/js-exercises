// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

const reduce = (array, fn, init) => {
  let total = init;
  for (i=0; i<array.length; i++){
    total = fn(total, array[i]);
  }
  return total;
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15