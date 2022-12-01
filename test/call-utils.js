Function.prototype.myCall = function (ctx = window, ...args) {
  // 定义唯一值
  /**
   * 刚开始 this 指向 getName
   * ctx[fn](...args) 执行是 this 指向 b
   * */
  const fn = Symbol('call')
  // 存储this
  ctx[fn] = this
  const ret = ctx[fn](...args)
  delete ctx[fn]
  return ret
}

const b = {
  name: 'b',
}
const a = {
  name: 'a',
  getName: function (arg) {
    console.log(this.name, arg)
  }
}
a.getName.myCall(b, '32')
a.getName()

