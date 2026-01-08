// https://www.codewars.com/kata/576986639772456f6f00030c

function pathFinder(area) {
    const grid = area.trim().split("\n").map((row) => row.split("").map(Number));
    const size = grid.length;
    const startNode = "0,0";

    const costs = {[startNode]: 0};
    const visited = new Set();
    const pending = [{x: 0 , y: 0, key: startNode}];

    while(pending.length > 0) {
        pending.sort((a,b) => costs[a.key] - costs[b.key]);
        const current = pending.shift();

        if (visited.has(current.key))
            continue;

        visited.add(current.key);

        if(current.x === size - 1 && current.y === size - 1)
            return costs[current.key];

        const currentHeight = grid[current.y][current.x];
        const currentCost = costs[current.key];

        const directions = [
            [0, -1],  // N
            [0,  1],  // S
            [1,  0],  // E
            [-1, 0]   // W
        ];

        for( [dx, dy] of directions) {
            const neighborX = current.x + dx
            const neighborY = current.y + dy

            if(neighborX < 0 || neighborY < 0 || neighborX >= size || neighborY >= size) continue;

            const neighborKey = `${neighborX},${neighborY}`;
            if (visited.has(neighborKey))
                continue;

            const neighborHeight = grid[neighborY][neighborX];
            const stepCost = Math.abs(currentHeight - neighborHeight);
            const newCost = currentCost + stepCost;
            
            if(costs[neighborKey] === undefined || newCost < costs[neighborKey]) {
                costs[neighborKey] = newCost;
                pending.push({ x: neighborX, y: neighborY, key: neighborKey });
            }

        }
    }

    return 0;
}

const area = `
0000000000000
1111111111110
0000000000000
0111111111111
0000000000000
1111111111110
0000000000000
0111111111111
0000000000000
1111111111110
0000000000000
0111111111111
0000000000000
`

console.log(pathFinder(area))