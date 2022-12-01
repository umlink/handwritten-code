/**
 * 合并数组且排序
 * */

const arr = [[1, 3, 5, 7], [2, 4, 6, 8], [123,124,235,2456,34,635,754,23,41,26,7,2345,143,5,1346,23,23]]


/**
 * 1. 拍平后排序 更快
 * 2. 归并排序
 * */

const mergeSort = (leftArr, rightArr) => {
  const result = []
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr, rightArr)
}

const mergeList = (arr) => {
  console.time('mergeList')
  if (!Array.isArray(arr)) {
    return new TypeError('必须为数组')
  }
  const newArr = [...arr]
  // 长度为1
  if (arr.length === 1) return arr // 单元素多层嵌套 需拍平 while => arr = [].concat(...arr)
  while (newArr.length > 1) {
    const left = newArr.shift()
    const right = newArr.shift()
    newArr.push(mergeSort(left, right))
  }
  console.timeEnd('mergeList')
  return newArr[0]
}

console.log(mergeList(arr))

function _flat1(arr) {
  if (!Array.isArray(arr)) return arr
  if (!arr.length) return;
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// function _flat2(arr) {
//   if (!Array.isArray(arr)) return arr
//   if (!arr.length) return;
//   return arr.reduce((prev, next) => {
//     return Array.isArray(next) ? [...prev, ..._flat2(next)] : [...prev, next]
//   }, [])
// }


const mergeList2 = (arr) => {
  console.time('mergeList-flat')
  const list =  _flat1(arr).sort((a, b) => a - b)
  console.timeEnd('mergeList-flat')
  return list
}

console.log(mergeList2(arr))
