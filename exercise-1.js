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

const transformStrings = array => {
  return array.reduce((acc, curr) => {
      return (curr.length <= 20) ? acc.concat(curr) : acc;
  }, []);

};

console.log(transformStrings(flavours));

module.exports = transformStrings;
