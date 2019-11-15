// Challenge 14 - Ticket to Ride

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const basePrice = 1;
  const distanceRate = distanceTraveled * 0.25;

  let totalFare = basePrice + distanceRate;

  if (numberOfPeople >= 30) {
    totalFare = totalFare + 0.25;
  }
  return `$${totalFare.toFixed(2)}`;
};

console.log(dynamicPricing(15, 10));
console.log(dynamicPricing(35, 5));
