import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const map = numbers.map(function (num) {
  return num + 2;
});
console.log(map);

//Filter - Create a new array by keeping the items that return true.
const filter = numbers.filter(function (num) {
  if (num > 10) {
    return num;
  }
});
console.log(filter);

//Reduce - Accumulate a value by doing something to each item in an array.

const reduce = numbers.reduce(function (acumulator, currentNum) {
  return acumulator + currentNum;
});
console.log(reduce);

//Find - find the first item that matches from an array.

const find = numbers.find(function (num) {
  return (num = 10);
});
console.log(find);

//FindIndex - find the index of the first item that matches.

const findIndex = numbers.findIndex(function (num) {
  return num === 5;
});
console.log(findIndex);

const emot = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(emot);

emot.map(function (emo) {
  return console.log(emo);
});
