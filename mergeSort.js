const mergeSort = startArray => {
  const length = startArray.length
  if (length === 1) {
    return startArray
  }

  const mid = Math.floor(length / 2)
  const leftArray = startArray.slice(0, mid)
  const rightArray = startArray.slice(mid, length)

  console.log('left: ', leftArray)
  console.log('right: ', rightArray)
  console.log('--------------------')
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
  const sortedArray = []
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0])
      leftArray.shift()
      console.log('sorted: ', sortedArray)
    } else {
      sortedArray.push(rightArray[0])
      rightArray.shift()
      console.log('sorted: ', sortedArray)
    }
  }
  return sortedArray.concat(leftArray, rightArray)
}

module.exports = mergeSort
