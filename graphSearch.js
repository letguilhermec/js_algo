const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data)

  start.edges.forEach(edge => {
    const neighbor = edge.end
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor)
      depthFirstTraversal(neighbor, visitedVertices)
    }
  })
}

module.exports = { depthFirstTraversal }
