function filterNumbers(arr) {
  if (Array.isArray(arr)) {
    const newArr = [];
    for (const item of arr) {
      if (typeof item === "number") {
        newArr.push(item);
      }
    }
    return newArr;
  } else {
    return "Invalid";
  }
}
const imputData = filterNumbers([
  12,
  "Masum",
  -2,
  null,
  1,
  undefined,
  6,
  "Rayeed",
  0,
]);
console.log(imputData);
