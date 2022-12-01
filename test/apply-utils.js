Function.prototype.myApply = function (ctx=window, args) {
  const fn = Symbol()
  ctx[fn] = this
  const ret = ctx[fn](...args)
  delete ctx[fn]
  return ret
}
