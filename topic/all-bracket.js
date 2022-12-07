/**
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 1
 * 1 2 2 1
 * 1 2 3、2 3 1、3 1 2、3 2 1、2 1 3、1 3 2
 * */

function permute(nums) {
  let result = []
  const numsLen = nums.length
  const factoryFunc = (path) => {
    if (path.length === numsLen) {
      result.push(path)
      return
    }
    for (let i = 0; i < numsLen; i++) {
      const item = nums[i]
      if (!path.includes(item)) {
        factoryFunc([...path, item])
      }
    }
  }
  factoryFunc([])
  return result
}

bracketFunc(arr)
