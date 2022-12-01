

const func1 = function (callback) {
  console.log(1)
  callback()
}
const func2 = function (callback) {
  console.log(2)
  callback()
}

const func3 = function (callback) {
  setTimeout(() => {
    console.log(3)
    callback()
  }, 2000)
}

const taskList = [func1, func3, func2]

const execCommand = function () {
  const iterator = taskList[Symbol.iterator]()
  const exec = () => {
    const { value: execItem, done } = iterator.next()
    if (done) {
      return console.log('按顺序校验完毕。。。')
    } else {
      execItem(exec)
    }
  }
  exec()
}


execCommand()
