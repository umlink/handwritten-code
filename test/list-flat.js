function _flat1(arr) {
  if (!Array.isArray(arr)) return arr
  if (!arr.length) return;
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

function _flat2(arr) {
  if (!Array.isArray(arr)) return arr
  if (!arr.length) return;
  return arr.reduce((prev, next) => {
    return Array.isArray(next) ? [...prev, ..._flat2(next)] : [...prev, next]
  }, [])
}

console.log(_flat2([1, 2, [1, [2, 3, [4, 5, [6]]]]]))
