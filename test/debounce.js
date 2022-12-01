/**
 * 节流：只执行一次
 * 重置 timer
 * */
const debounce = function (func, delay) {
  let timer = 0
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay * 1000)
  }
}

const function1 = (arg) => {
  console.log(1 + arg)
}
const temp = debounce(function1, 1)

