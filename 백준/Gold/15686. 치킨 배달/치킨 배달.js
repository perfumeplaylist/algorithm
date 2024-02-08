const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(x => +x);
var house = [];
var chicken = [];
for (var i = 1; i < input.length; i++) {
    var arr = input[i].split(' ').map(function(x, idx) {
        if (+x === 1) {
            house.push([i-1, idx]);
        }
        if (+x === 2) {
            chicken.push([i-1, idx]);
        }
        return +x;
    })
}
var distance = [];
for (var i = 0; i < house.length; i++) {
    distance.push([]);
}
for (var i = 0; i < house.length; i++) {
    var x = house[i][0];
    var y = house[i][1];
    for (var j = 0; j < chicken.length; j++) {
        var _x = chicken[j][0];
        var _y = chicken[j][1];
        distance[i].push(Math.abs(x-_x)+Math.abs(y-_y));
    }
}

var arr = [];
var min = Infinity;
function dfs(cmd) {
    if (cmd === M) {
        var sum = 0;
        for (var i = 0; i < distance.length; i++) {
            var chicken_distance = Infinity
            for (var j = 0; j < arr.length; j++) {
                var k = arr[j];
                if (distance[i][k] < chicken_distance) {
                    chicken_distance = distance[i][k];
                }
            }
            sum += chicken_distance;
        }
        if (sum < min) {
            min = sum;
        }
        return;
    }
    for (var i = 0; i < chicken.length; i++) {
        var last = arr[arr.length-1];
        if (i <= last) {
            continue;
        } else {
            arr.push(i)
            dfs(cmd+1);
        }
        arr.pop();
    }
}
dfs(0);
console.log(min);