const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log("Original Numbers: ", numbers);
console.log(
  "Sort Numbers (Des): ",
  numbers.sort((a, b) => b - a),
);
console.log(
  "Sort Numbers (Asc): ",
  numbers.sort((a, b) => a - b),
);
