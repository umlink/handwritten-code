function maxAreaOfIsland(grid: number[][]): number {
  const m = grid[0].length
  const n = grid.length
  let tempRet: number = 0
  let maxResult = 0
  const computeArea = (x: number, y: number) => {
    if (grid[x][y] === 1) {
      tempRet += 1
      grid[x][y] = -1
    }
    if (x > 0 && grid[x-1][y] === 1) {
      computeArea(x - 1, y)
    }
    if (x + 1 < n && grid[x+1][y] === 1) {
      computeArea(x + 1, y)
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      computeArea(x, y - 1)
    }
    if ( y + 1 < m && grid[x][y + 1] === 1) {
      computeArea(x, y + 1)
    }
  }
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      const current = grid[x][y]
      if (current === 1) {
        tempRet = 0
        computeArea(x, y)
        maxResult = Math.max(maxResult, tempRet)
      }
    }
  }
  return maxResult
}

// [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
