/**
 * 防抖 放缓执行速度，不清楚 timer
 * */

const throttle = function (func, delay) {
  let padding = false
  return function (...args) {
    if (padding) return
    padding = true
    setTimeout(() => {
      func.apply(this, args)
      padding = false
    }, delay)
  }
}

const function1 = (arg) => {
  console.log(1 + arg)
}
const temp = throttle(function1, 1)


temp(1)
temp(2)
temp(3)
