const maxDepth = (arr) => {
  if (!Array.isArray(arr)) return
  let dep = 1
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
    dep++
  }
  return arr
}

console.log(maxDepth([1, [2, [3, [4]]]]))
