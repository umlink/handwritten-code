// /**
//  * 
//  * 
// */
// const height = [0,1,0,2,1,0,1,3,2,1,2,1]

// const func = (arr) => {
//     let left = 0
//     let right = arr.length - 1
//     let minVal = Math.min(arr[left], arr[right])
//     let sum = 0
//     while (left < right) {
//       if (arr[left] < arr[right]) {
//         left++
//         if (arr[left] < minVal) {
//           sum += minVal - arr[left]
//         } else {
//           minVal = Math.min(arr[left], arr[right])
//         }
//       } else {
//         right--
//         if (arr[right] < minVal) {
//           sum += minVal - arr[right]
//         } else {
//           minVal = Math.min(arr[left], arr[right])
//         }
//       }
//     }
//     return sum
// }

// console.log(func(height))

// const func2 = (arr) => {
//   let resultList = []
//   const recursive = (arr) => {
//     let temp = 0
//     let tempList = []
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[temp] > 0) {
//         if (arr[i] < arr[temp]) {
//           tempList.push(arr[i])
//           if (i === arr.length - 1 && tempList.length > 2) {
//             recursive(tempList.reverse())
//           }
//         } else {
//           tempList.push(arr[i])
//           if (tempList.length > 2) resultList.push(tempList)
//           tempList = [arr[i]]
//           temp = i
//         }
//       } else {
//         temp = i
//         tempList.push(arr[temp])
//       }
//     }
//   }
//   recursive(arr)
//   return resultList.reduce((prev, curr) => {
    
//     const minVal = Math.min(curr[0], curr[curr.length - 1])
//     let sum = 0
//     for (let i = 1; i < curr.length - 1; i++) {
//       sum += minVal - curr[i]
//     }
//     return prev + sum
//   }, 0)
// }

// console.log(func2(height))

// const func3 = (arr) => {
//   const arrLen = arr.length
  
//   const leftMax = new Array(arrLen).fill(0)
//   const rightMax = leftMax.slice()

//   leftMax[0] = arr[0]
//   for (let i = 1; i < arrLen; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], arr[i])
//   }

//   for (let i = arrLen - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], arr[i])
//   }

//   let sum = 0
//   rightMax[arrLen - 1] = arr[arrLen - 1];
//   for (let i = 0; i < arrLen; i++) {
//     sum += Math.min(leftMax[i], rightMax[i]) - arr[i]
//   }
//   return sum
// }
// console.log('****', func3(height))


// const data = [
//   { name: 'foo', age: 16, city: 'shanghai' },
//   { name: 'bar', age: 24, city: 'hangzhou' },
//   { name: 'fiz', age: 22, city: 'shanghai' },
//   { name: 'baz', age: 19, city: 'hangzhou' }
// ];

// function queryData(data) {
//   this.data = data
//   this.result = []
//   this.where = function (sort) {
//     this.result = this.data.filter(sort)
//     return this
//   }
//   this.orderBy = function (key, DESC = false) {
//     this.result = this.result.sort((a, b) => {
//       if (DESC) return b - a
//       return a - b
//     })
//     return this
//   }
//   this.execute = function () {
//     return this.result
//   }
//   return this
// }


