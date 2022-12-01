function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}

const compose = (...fn) => {
  return fn.reduce((pre, cur) => {
    return (...args) => {
      return pre(cur(...args))
    }
  })
}

const compose2Promise = (...fn) => {
  const lian =  fn.reduce((pre, cur) => {
    return (...args) => {
      return pre(cur(...args))
    }
  })
  return (...args) => {
    return new Promise((resolve) => {
      resolve(lian(...args))
    })
  }
}

const a = compose2Promise(fn1, fn2, fn3, fn4);
console.log(a(1).then(res => {console.log(res)}))
