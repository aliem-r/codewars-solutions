// https://www.codewars.com/kata/5765870e190b1472ec0022a2

function pathFinder(maze) {
    const grid = maze.trim().split("\n").map((row) => row.split(""));
    const size = grid.length;
    const startKey = "0,0"

    const visited = new Set();
    const queue = [{x: 0, y: 0, key: startKey}]

    let index = 0;

    while(index < queue.length) {
        const current = queue[index++];

        if(current.x === size - 1 && current.y === size - 1)
            return true;

        const directions = [
            [0, -1],  // N
            [0,  1],  // S
            [1,  0],  // E
            [-1, 0]   // W
        ];

        for ([dx, dy] of directions) {
            const neighborX = current.x + dx;
            const neighborY = current.y + dy;

            if(neighborX < 0 || neighborY < 0 || neighborX >= size || neighborY >= size || grid[neighborY][neighborX] === "W")
                continue

            const neighborKey = `${neighborX},${neighborY}`;

            if (visited.has(neighborKey))
                continue;
            
            visited.add(neighborKey);
            queue.push({ x: neighborX, y: neighborY, key: neighborKey });
        }
    }

    return false;
}

const maze = `..W
.W.`;

console.log(pathFinder(maze));
