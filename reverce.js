const arr = [9, 8, 1, 11, 77];
console.log("Original Numbers: ", arr);
// arr.reverse();
// console.log("Reversed: ", arr);
const newArr = [];
for (const item of arr) {
  newArr.unshift(item);
}
console.log("Reversed Numbers: ", newArr);

const colors = ["red", "blue", "green", "yellow", "orange"];
console.log("Original Colors: ", colors);
console.log("Reverced Colors: ", colors.reverse());

const statement = "I am a hard working person";
const statementSplit = statement.split(" ");
console.log("Original Statement:", statement);
console.log("Reverced Statement:", statementSplit.reverse().join(" "));
