/*
* add 返回一个函数
* 该函数返回本身
* 改函数有一个 sumOf 方法
* */
const add = (...args1) => {
  let _args = args1
  const sum = function (...args2) {
    _args = [..._args, ...args2]
    return sum
  }
  sum.sumOf = () => {
    return _args.reduce((a, b) => a + b)
  }
  return sum
}

console.log(add(1)(2, 2)(3).sumOf())
