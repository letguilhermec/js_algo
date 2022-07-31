const capturingRainwater = heights => {
  let totalWater = 0
  let leftPointer = 0
  let rightPointer = heights.length - 1
  let leftBound = 0
  let rightBound = 0

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer]
      }
      totalWater += leftBound - heights[leftPointer]
      leftPointer++
    } else {
      if (heights[rightPointer] > rightBound) {
        rightBound = heights[rightPointer]
      }
      totalWater += rightBound - heights[rightPointer]
      rightPointer--
    }
  }
  return totalWater
}

module.exports = capturingRainwater
