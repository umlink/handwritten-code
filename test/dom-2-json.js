const dom = `<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
`

/**
 * dom 树解析
 * - tagName
 * - childNodes
 *
 */
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.childNodes.forEach(node => obj.children.push(dom2Json(node)))
  return obj
}
