const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48050 },
];
function findAveragePhonePrice(phones) {
  let totalSum = 0;
  for (let price of phones) {
    totalSum += price.price;
  }
  const averagePrice = totalSum / phones.length;
  return averagePrice;
}
const averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice);
