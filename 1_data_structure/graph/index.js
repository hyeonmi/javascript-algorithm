class Queue {
    constructor(){
        this.queue = [];
    }

    dequeue(){
        return this.queue.shift();
    }

    enqueue(node){
        this.queue.push(node);
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

class Graph {
    constructor(vertexes){
        this.vertexes = vertexes;
        this.edges = new Map();
        this._createVertexes();

    }

    _createVertexes(){
        for (var i = 0; i < this.vertexes.length; i++) {
            this.addVertex(this.vertexes[i]);
        }

    }

    addVertex(v){
        this.edges.set(v, []);
    }

    addEdge(v, w){
        this.edges.get(v).push(w);
        this.edges.get(w).push(v);
    }

    printGraph(){
        const edgesKeys = this.edges.keys();
        for(let i of edgesKeys){
            const edgesValues = this.edges.get(i);
            let conc = "";

            for(let j of edgesValues){
                conc += j + "";

                console.log(i, " -> ", conc);
            }
        }

    }

    breadthFirstSearch(startingNode){
        const visited = [];
        const q = new Queue();

        visited[startingNode] = true;
        q.enqueue(startingNode);

        while(!q.isEmpty()){
            let vertex = q.dequeue();

            console.log(vertex);

            const neighbours = this.edges.get(vertex);
            for(let i in neighbours){
                let neighbour = neighbours[i];
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.enqueue(neighbour);
                }
            }
        }

    }

    depthFirstSearch(startingNode){
        const visited = [];
        this.depthSearchIterator(startingNode, visited);
    }

    depthSearchIterator(vertex, visited){
        visited[vertex] = true;
        console.log(vertex);

        const neighbours = this.edges.get(vertex);

        for(let i in neighbours){
            const neighbour = neighbours[i];
            if(!visited[neighbour]){
                this.depthSearchIterator(neighbour, visited);
            }
        }
    }
}

var g = new Graph([ 'A', 'B', 'C', 'D', 'E', 'F' ]);
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// g.printGraph();
// g.breadthFirstSearch("A");
// g.depthFirstSearch("A");
