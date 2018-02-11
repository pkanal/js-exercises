// Given an Array of strings, use Array.prototype.reduce to write a function that
// creates an object that contains the number of times each string occured in the array.

const someWords = ["apple", "banana", "apple", "durian", "durian", "durian"];

const countWords = words => {
  // your solution here
  return words.reduce((acc, curr) => {
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});
};
console.log(countWords(someWords));

module.exports = countWords;
