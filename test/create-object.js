const isObject = function (val) {
  return typeof val === 'object' && typeof val !== null
}

Function.prototype.createObj = function (obj, attr) {
  if (attr === null) {
    return throw Error('xxxx')
  } else {}
  const Fn = () => {}
  const temp = new Fn()
  temp.prototype = obj
  if (isObject(attr)) {
    Object.defineProperties(temp, attr)
  }
  return temp
}
