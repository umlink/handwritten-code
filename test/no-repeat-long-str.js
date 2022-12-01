/**
 * 最长非重复子串
 * */

const noRepeatStr = (str) => {
  if (typeof str !== 'string') return
  if (!str.length) return
  let currentIndex = 0;
  let tempStr = str[0]
  let maxStr = str[0]
  const strLen = str.length
  while (currentIndex < str.length) {
    const remainStr = str.substring(currentIndex, strLen)
    for (let s of remainStr) {
      if (tempStr.indexOf(s) === -1) {
        tempStr += s
        maxStr = maxStr.length >= tempStr.length ? maxStr : tempStr
      } else {
        currentIndex++
        tempStr = ''
        break;
      }
    }
  }
  console.log(maxStr, maxStr.length)
  return maxStr
}

noRepeatStr('abcae23432423423')
