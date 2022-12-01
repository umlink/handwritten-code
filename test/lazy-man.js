/**
 实现一个LazyMan，可以按照以下方式调用:
 LazyMan(“Hank”)输出:
 Hi! This is Hank!

 LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
 Hi! This is Hank!
 //等待10秒..
 Wake up after 10
 Eat dinner~

 LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 Hi This is Hank!
 Eat dinner~
 Eat supper~

 LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
 //等待5秒
 Wake up after 5
 Hi This is Hank!
 Eat supper
 *
 */
/**
 * constructor  - name
 * sleep - task
 * sleep - this
 * eat - this
 * taskQ
 * 链式调用 return this
 * */
class LazyMan {
  constructor(name) {
    this.taskQueue = []
    this.name = name
    const task = () => {
      console.log(` Hi! This is ${name}!`)
      this.runNextTask()
    }
    this.taskQueue.push(task)
    // 下一个执行循环 sleepFirst
    setTimeout(() => {
      this.runNextTask()
    },0)
    return this
  }
  runNextTask () {
    if (this.taskQueue.length) {
      const task = this.taskQueue.shift()
      task && task()
    }
  }
  eat (food) {
    const task = () => {
      console.log(` Eat ${food}~`)
      this.runNextTask()
    }
    this.taskQueue.push(task)
    return this
  }
  sleep (delay, isFirst = false) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
        this.runNextTask()
      }, delay * 1000)
    }
    if (isFirst) {
      this.taskQueue.unshift(task)
    } else {
      this.taskQueue.push(task)
    }
    return this
  }
  sleepFirst (time) {
    this.sleep(time, true)
    return this
  }
}

new LazyMan('Jack').sleep(2).eat('苹果').sleepFirst(3).eat('啦啦啦啦')
