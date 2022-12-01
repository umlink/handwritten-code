const multiplication = function (n) {
  let i = 1
  const list = []
  while (i <= n) {
    list.push(`${i}x${n}=${i * n}`)
    i++
  }
  console.log(list.join('  '))
  if (n === 1) return
  multiplication(n-1)
}

multiplication(9)
