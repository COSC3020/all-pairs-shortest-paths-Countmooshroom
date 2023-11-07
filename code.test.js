const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = [
  [[1, 2], [2, 1], [3, 4]],
  [[2, 1]],
  [[0, 9], [3, 8]],
  [[2, 2]]
];
var expected = [
    [0, 2, 1, 4],
    [10, 0, 1, 9],
    [9, 11, 0, 8],
    [11, 13, 2, 0]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));



var graph = [
  [[1, 5], [2, 2]],
  [[3, 3], [4, 7]],
  [[0, 2], [1, 9]],
  [[2, 3]],
  [[0, 8], [3, 5]]
];
var expected = [
    [ 0, 5, 2, 8, 12 ],
    [ 8, 0, 6, 3, 7 ],
    [ 2, 7, 0, 10, 14 ],
    [ 5, 10, 3, 0, 17 ],
    [ 8, 13, 8, 5, 0 ]
  ]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));



var graph = [
  [[1, 10]],
  [[1, 4], [2, 2]],
  [[0, 9]],
];
var expected = [
    [0, 10, 12],
    [11, 4, 2],
    [9, 19, 0]
]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));