/**
 * 倒叙输出
 * prev(next())。。。
 * fn1(fn2(fn3(fn4(x))))
 * 
*/

const compose = (...fn) => {
  if (!fn.length) return v => v
  if (fn.length === 1) return fn[0]
  return fn.reduce((pre, cur) => {
    return (...args) => {
      return pre(cur(...args))
    }
  })
}

function fn1(x) {
  return x + 1;
  console.log(1)
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  console.log(3)
  return x + 3;
}
function fn4(x) {
  console.log(4)
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11


const compose2 = (...args) => {
  if (!fn.length) return v => v
  if (fn.length === 1) return fn[0]
  args.reduce((pre, cur) => {
    return (...arg) => {
      pre(cur(...arg))
    }
  })
}