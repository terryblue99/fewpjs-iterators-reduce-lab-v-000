const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = (batteryBatches) => {
  var totalBatteries = batteryBatches.reduce((total, element) => element + total, 0)
  return totalBatteries
}
