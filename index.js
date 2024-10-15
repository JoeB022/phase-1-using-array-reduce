const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0); // Start with an initial total of 0

// Log the total number of batteries
console.log(totalBatteries); // Output the result
