const list = [
  {
    id: 1,
    text: '节点1',
    parentId: 0 //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: '节点1_1',
    parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 3,
    text: '节点1_2',
    parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 4,
    text: '节点1_1_1',
    parentId: 2 //通过这个字段来确定子父级
  }
]

const listToTree = (list) => {
  const cache = {}
  list.forEach((item) => {
    cache[item.id] = item
  })
  const tree = []
  list.forEach((item) => {
    if (item.parentId === 0) {
      tree.push(item)
    } else {
      if (!cache[item.parentId].children) {
        cache[item.parentId].children = []
      }
      cache[item.parentId].children.push(item)
    }
  })
  return tree
}

console.log(JSON.stringify(listToTree(list)))
