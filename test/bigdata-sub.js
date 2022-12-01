/**
 * 大数相减
 * */
let a = "900719";
let b = "1234567899";

const sub = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)
  const symbol = Number(a[0]) - Number(b[0]) > 0 ? '' : '-'
  const max = symbol === '-' ? b : a
  const min = symbol === '-'? a : b
  let t = 0
  let result = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    const temp = max[i] - min[i] - t
    t = temp < 0 ? 1 : 0
    result = '' + (temp > 0 ? temp : (10 + temp)) + result
  }
  result = symbol + result
  return result
}

console.log(sub(a, b));

