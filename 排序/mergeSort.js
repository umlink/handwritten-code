/**
 * 归并排序
*/

const arr = [1, 3, 6, 4, 10, 3, 20, 7]


const mergeSortList = (arr) => {
  if (arr.length < 2) return arr
  const mid = arr[0]
  let i = 1
  const left = []
  const right = []
  while (i < arr.length) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
    i++
  }
  return [...mergeSortList(left), mid, ...mergeSortList(right)]
}

console.log(JSON.stringify(mergeSortList(arr)))