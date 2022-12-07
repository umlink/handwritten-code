const list = [0,1,0,2,1,0,1,3,2,1,2,1]
/**
 * 接雨水
 * */
const computeRain = (arr) => {
  let left = 1
  let preLeft = 0
  let preRight = arr.length - 1
  let right = preRight - 1
  const result = []
  const maxIndex = list.indexOf(Math.max(...list))
  while (left <= maxIndex) {
    if (arr[preLeft] > arr[left]) {
      result.push(arr[preLeft] - arr[left])
    } else {
      preLeft = left
    }
    left++
  }
  while (right >= maxIndex) {
    if (arr[right] < arr[preRight]) {
      result.push(arr[preRight] - arr[right])
    } else {
      preRight = right
    }
    right--
  }
  console.log(result)
}

computeRain(list)
