class Graph {
  constructor(size, directed = false) {
    this.size = Number.isInteger(size) && size >= 0 ? size : 0;
    this.directed = directed;
    this.matrix = Array.from({ length: size }, () => new Array(size).fill(0));
  }

  addVertex() {
    for (let i = 0; i < this.size; ++i) {
      this.matrix[i][this.matrix[i].length] = 0;
    }

    ++this.size;
    this.matrix[this.matrix.length] = new Array(this.size).fill(0);
  }

  addEdge(u, v) {
    if (
      !Number.isInteger(u) ||
      !Number.isInteger(v) ||
      u < 0 ||
      u >= this.size ||
      v < 0 ||
      v >= this.size
    )
      return;

    this.matrix[u][v] = 1; 

    if (!this.directed) {
      this.matrix[v][u] = 1;
    }
  }

  print() {
    const n = this.size;
    for (let i = 0; i < n; ++i) {
      let str = "";

      for (let j = 0; j < n; ++j) {
        str += this.matrix[i][j] + " ";
      }

      console.log(str);
    }
  }
}