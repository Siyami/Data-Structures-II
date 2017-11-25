/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const node = new GraphNode({ value, edges });
    const vertices = this.vertices;
    vertices.push(node);
    for (let i = 0; i < edges.length; i++) {
      const obj = {};
      obj.value = edges[i];
      obj.edges = [value];
      const edgenode = new GraphNode(obj);
      vertices.push(edgenode);
    }
    const verticeslen = this.vertices.length;
    if (verticeslen === 2 && !vertices[0].edges.length) {        
      vertices[0].edges = vertices[1];
      vertices[1].edges = vertices[0];
    }
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    const vertices = this.vertices;
    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].value === value) {
        return true;
      }
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // const allvertices = this.vertices;
    // for (let i = 0; i < allvertices.length; i++) {
    //   if (allvertices[i].value === value) {
    //     allvertices.splice(i);
    //   }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let vertices = this.vertices;
    vertices = vertices.filter((element) => {
      return element.value === fromVertex;
    });
    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].edges.includes(toVertex)) return true;
    }        
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    let vertices = this.vertices;
    vertices = vertices.filter((element) => {
      return element.value === fromVertex;
    });
    for (let i = 0; i < vertices.length; i++) {
      vertices[i].edges = toVertex;
    }  
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {

  }
}

module.exports = Graph;

