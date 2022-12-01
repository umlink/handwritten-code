/**
 * 小孩报数问题
*/

function childNum(num, count){
  let allplayer = [];
  for(let i = 0; i < num; i++){
      allplayer[i] = i + 1;
  }

  console.log(allplayer)

  let exitCount = 0;    // 离开人数
  let counter = 0;      // 记录报数
  let curIndex = 0;     // 当前下标

  while(exitCount < num - 1){
      if(allplayer[curIndex] !== 0) counter++;

      if(counter === count){
          allplayer[curIndex] = 0;
          counter = 0;
          exitCount++;
      }
      curIndex++;
      if(curIndex === num){
          curIndex = 0
      }
  }
  for(i = 0; i < num; i++){
      if(allplayer[i] !== 0){
          return allplayer[i]
          break
      }
  }
}
console.log(childNum(30, 3))


/**
 * 2. 闭环链表实现
 */

const getNodeIndex = (list, node) => {
  let index = 0
  list.forEach((item, _index) => {
    if (item.num === node.num) {
      index = _index
    }
  })
  return index
}

const childGetNum = (max, count) => {
  let list = []
  for (let i = 1; i <= max; i++) {
    list.push({
      num: i,
      nextNum: i === max ? 1 : i + 1
    })
  }

  let num = 1
  let current = list[0]

  while (list.length > 1 && current) {
    const currentIndex = getNodeIndex(list, current)
    const nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1
    if (num === count) {
      // 获取当前需要去除的上下两个节点
      const prevIndex = currentIndex == 0 ? list.length - 1 : currentIndex - 1
      list[prevIndex].nextNum = list[nextIndex].num
      // current 为下一个开始
      current = list[nextIndex]
      // 3n 移除
      list.splice(currentIndex, 1)
      // 重新开始计数
      num = 1

    } else {
      num++
      current = list[nextIndex]
    }
  }
  console.log(list[0].num)
}

// childGetNum(30, 3)

function josephRing(n, m) {
  if (n <= 1 || m < 1) {
    console.log("you can't play Joseph's game. n must be bigger than 1, m must be bigger than 0")
    return
  }

  let r = 0
  for (let i = 2; i <= n; i++) {
    //会先计算 n = 2 时的结果，最终得到的 r 就是胜利者
    r = (r + m) % i
  }
  console.log(r + 1 + ' is the winner.')
}

// console.log(josephRing(30, 3))
