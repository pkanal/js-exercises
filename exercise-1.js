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

const maxSize = 28;

const transformStrings = array => array.filter(entry => entry.length <= maxSize).map(entry => entry.split("").reverse().join(""));

console.log(transformStrings(flavours));

module.exports = transformStrings;
