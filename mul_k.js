const mul = (m, n, k) => {
  let left = 1
  let right = m * n
  while (left < right) {
    const mid = left + ((right - left) / 2 | 0)
    const start = ((mid / n) | 0) + 1
    let count = (start - 1) * n
    for (let i = start; i <= m; i++) {
      count += (mid / i) | 0
      console.log(count, start, k)
    }
    if (count >= k) {
      right = mid
    } else {
      left = mid + 1
    }
  }
}

mul(9, 9, 9)