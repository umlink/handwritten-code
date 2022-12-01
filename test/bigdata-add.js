/**
 * 大数相加
 * 遍历累加进位
 * 以最长的数字为基准开始遍历
 *
 * */
let a = "9007199254740991";
let b = "1234567899999999999";

const add = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let result = ''
  let carry = 0 // 进位
  for (let i = maxLen - 1; i >= 0; i--) {
    const temp = Number(a[i]) + Number(b[i]) + carry
    carry = ~~(temp/10)
    console.log(result)
    result = '' + temp % 10 + result
  }
  if (carry) {
    result = '' + carry + sum
  }
  return result
}
console.log(add(a, b))
