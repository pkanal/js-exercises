// Write a function `transformStrings` that takes an array of strings and
// only returns strings with 20 characters or less reversed.

const flavours = [
  "Cranberry",
  "Strawberry and Peanut-Butter Ice-Cream",
  "Dirty Sock",
  "Beef Casserole",
  "Peppermint",
  "Earwax",
  "Overcooked Cabbage"
];

const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

const transformStrings = array =>
  array.filter(str => str.length <= 20).map(reverseString);

console.log(transformStrings(flavours));

module.exports = transformStrings;
