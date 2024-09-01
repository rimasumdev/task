const numbers = [12, 98, 5, 41, 23, 78, 46];
//Using Join Mathod
console.log("Using Join:", numbers.join(""));
// Using Loop
let singleString = "";
for (const str of numbers) {
  singleString = singleString + str;
}
console.log("Using Loop:", singleString);
