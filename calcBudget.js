function calculateElectronicsBudget(numLaptops, numTablets, numMobiles) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalBudget =
    numLaptops * laptopPrice +
    numTablets * tabletPrice +
    numMobiles * mobilePrice;

  return totalBudget;
}
const totalCost = calculateElectronicsBudget(2, 3, 5);
console.log(totalCost);