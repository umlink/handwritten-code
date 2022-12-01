Function.prototype.myBind = function (ctx, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('need function')
  }
  const fn = Symbol()
  ctx[fn] = this
  const _this = this
  return function (...args2) {
    // 由于 new 的特殊性，若为 new 关键词生成的实例 this 指向的是实例本身
    if (this instanceof _this) {
      this[fn] = _this
      return this[fn](...[...args, ...args2])
    }
    return ctx[fn](...[...args, ...args2])
  }
}
