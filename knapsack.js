const recursiveKnapsack = (weightCap, weights, values, i) => {
  if (weightCap === 0 || i === 0) {
    return 0
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, i - 1)
  } else {
    const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1)
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1)
    return Math.max(includeItem, excludeItem)
  }
}

const dynamicKnapsack = (weightCap, weights, values) => {
  const numItem = weights.length
  const matrix = new Array(numItem)

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1)
    for (let weight = 0; weight <= weightCap; weight++) {
      if (index === 0 || index === 0) {
        matrix[index][weight] = 0
      } else if (weights[index - 1] <= weight) {
        const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]]
        const excludeItem = matrix[index - 1][weight]
        matrix[index][weight] = Math.max(includeItem, excludeItem)
      } else {
        matrix[index][weight] = matrix[index - 1][weight]
      }
    }
  }
  return matrix[numItem][weightCap]
}

module.exports = { recursiveKnapsack, dynamicKnapsack }
