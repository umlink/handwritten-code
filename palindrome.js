/**
 * 回文串
 * 1. 扩散法
*/

const str = 'aaaa'

const findPalindrome = (str) => {
  if (str.length <= 1) return str
  let maxStr = ''
  for (let i = 0; i < str.length + 1; i++) {
    let left = i - 1
    let right = i + 1
    let tempStr = str[i]
    let spread = false // 是否开始两边扩散
    let stop = false
    while ((left >= 0 || right <= str.length - 1) && !stop) {
      if (str[left] === str[right]) {
        tempStr = str[left] + tempStr + str[right]
        left -= 1
        right += 1
        spread = true
      } else {
        if (!spread) { // 第一次 主要处理连续重复子串 aaa => 不断吧right 右移
          if (str[right] === str[i]) {
            tempStr += str[i]
            right += 1
            if (right >= str.length) {
              stop = true
            }
          } else {
            stop = true
          }
        } else {
          stop = true
        }
      }
      maxStr = tempStr.length > maxStr.length ? tempStr : maxStr
    }
  }
  return maxStr
}

console.log(findPalindrome(str))

const compareFlipStr = (str) => {
  return str === str.split('').reverse().join('')
}

const findPalindrome2 = (str) => {
  let strLen = str.length
  if (strLen <= 1) return str
  let maxStr = ''
  for (let i = 0; i < strLen; i++) {
    let j = strLen - 1
    while (j >= i) {
      const newStr = str.substr(i, j + 1)
      if (compareFlipStr(newStr)) {
        maxStr = maxStr.length < newStr.length ? newStr : maxStr
      }
      j--
    }
  }
  console.log(maxStr)
}

findPalindrome2('qwertyuiiuytrewq')