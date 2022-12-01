/**
 * Reflect.ownKeys
 * WeakMap 临时引用
 * */

const isObject = function (obj) {
  return typeof obj === 'object' && obj !== null
}

const deepClone = function (obj, cache = new WeakMap()) {
  if (!isObject(obj)) return obj
  if (cache.has(obj)) return cache.get(obj)
  let temp = Array.isArray(obj) ? [] : {}
  cache.set(obj, temp)

  Reflect.ownKeys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      temp[key] = deepClone(obj[key], cache)
    } else {
      temp[key] = obj[key]
    }
  })
  return temp
}
