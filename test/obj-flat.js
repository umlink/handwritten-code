const obj = {
  a: {
    b: 1,
    c: 2,
    d: {e: 5}
  },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
}

const isObject = (val) => {
  return typeof val === 'object' && val !== null
}


const flatObj = (val) => {
  if (!isObject(val)) return val
  const result = {}
  const traverseObj = (cur, prefix = '') => {
    if (!isObject(cur)) {
      result[prefix] = cur
    } else {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => traverseObj(item, `${prefix}[${index}]`))
      } else {
        for(let key in cur) {
          traverseObj(cur[key], `${prefix ? prefix + '.' : prefix}${key}`)
        }
      }
    }
  }
  traverseObj(val, '')
  console.log(result)
  return result
}

flatObj(obj)
