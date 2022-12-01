const str = 'abddrtyuiuhghjkjhgfghjiytrtyuikjhgfcvbnmhgfghiuytrfvbjhgb'


const compareReverseStr = (str) => {
  return str === str.split('').reverse().join('')
}
const pdString = (str) => {
  if (!str) return
  if(str.length === 1) return
  const strLen = str.length
  let tempStr = ''
  let result = []
  let i = 0
  while (i < strLen) {
    let j = i + 1
    tempStr = str[i]
    while (j < strLen) {
      tempStr += str[j]
      if (compareReverseStr(tempStr)) {
        result.push(tempStr)
      }
      j++
    }
    i++
  }
  console.log(result)
}

pdString(str)
