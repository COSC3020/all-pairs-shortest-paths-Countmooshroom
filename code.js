function allPairsShortestPaths(graph) {
    //Initialize a V x V matrix dist to infinity
    var dist = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = [];
        for (let j = 0; j < graph.length; j++) {
            dist[i][j] = Infinity;
        }
    }

    //for each vertex, dist[v][v] = 0
    for (let v = 0; v < graph.length; v++) {
        dist[v][v] = 0;

        //for each edge, dist[u][v] = weight((u,v))
        for (let u = 0; u < graph[v].length; u++) {
            dist[v][graph[v][u][0]] = graph[v][u][1];
        }
        
    }
    
    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}
