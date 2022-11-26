/**
 * 深拷贝：
 * 1. JSON.stringify 无法处理 function undefined symbol
 *    > undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了
 *    > 而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象。
 * 2. 遍历
 * 3. 函数库lodash的_.cloneDeep
 * 4. jquery 有提供一个$.extend
 * 浅拷贝
 * 1. Object.assign({}, obj)
 *    > 如果源目标对象中某个属性值是对另一个对象的引用，那么这个属性的拷贝仍然是对引用的拷贝
 * 2. 扩展运算符：{...obj}
 */

/**
 * Reflect.ownKeys方法用于返回对象的所有属性
 * 基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
 * 
 * WeakMap 保存临时遍历对象 防止循环引用
 *    > WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
 *    > WeakMap的键名所指向的对象，不计入垃圾回收机制。 
 *      WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，
 *      即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，
 *      垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 
 *      里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
 * 
 */

const isObject = (val) => {
  return typeof val === 'object' && val !== null
}

const deelClone = (obj, cache = new WeakMap()) => {
  if (!isObject(obj)) return obj
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  let target = Array.isArray(obj) ? [] : {};
  cache.set(obj, target);

  Reflect.ownKeys(obj).forEach(key => {
    const item = obj[key]
    if (isObject(item)) {
      target[key] = deelClone(item, cache)
    } else {
      target[key] = item
    }
  })
}


const _deepClone = (obj, cache = new WeakMap()) => {
  if (!isObject(obj)) return obj
  if (cache.has(obj)) return cache.get(obj);

  const temp = Array.isArray(obj) ? [] : {}
  cache.set(obj, temp)

  Reflect.ownKeys(obj).forEach(key => {
    if (isObject(obj[key])) {
      temp[key] = _deepClone(obj[key], cache)
    } else {
      temp[key] = obj[key]
    }
  })
  return temp
}


const _depClone2 = (obj, cache = new WeakMap()) => {
  if (!isObject(obj)) return obj
  if (cache.has(obj)) return cache.get(obj)

  const temp = Array.isArray(obj) ? [] : {}
  cache.set(obj, temp)

  Reflect.ownKeys(obj).forEach((key) => {
    if (isObject(obj[key])) {
      temp[key] = _depClone2(obj[key], cache)
    } else {
      temp[key] = obj[key]
    }
  })
  return temp
}