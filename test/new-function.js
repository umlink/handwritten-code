const newFunction = function (constructor, ...args) {

  const obj = Object.create(constructor.prototype);
  // obj.__proto__ = obj for Object.create(null)
  const ret = constructor.apply(obj, args) // 改变 this 指向
  const flag = typeof ret === 'function' || typeof ret === 'object'
  return flag ? ret : obj
}
