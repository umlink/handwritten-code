// 1 1 2 3 5 8 13 15

const fibonacci = function (n) {
  const getCurrentVal = (n) => {
    return n <= 2 ? 1 : getCurrentVal(n - 1) + getCurrentVal(n - 2)
  }
  let i = 0
  while ( i < n) {
    i++
    console.log(getCurrentVal(i))
  }
}

fibonacci(10)
