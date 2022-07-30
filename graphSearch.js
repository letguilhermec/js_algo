const Queue = require('./helpers/Queue')

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

const breadthFirstTraversal = start => {
  const visitedVertices = [start]
  const visitQueue = new Queue()
  visitQueue.enqueue(start)

  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue()
    console.log(current.data)
    current.edges.forEach(edge => {
      const neighbor = edge.end

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor)
        visitQueue.enqueue(neighbor)
      }
    })

  }
}

module.exports = { depthFirstTraversal, breadthFirstTraversal }
