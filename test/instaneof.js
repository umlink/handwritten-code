Function.prototype._instanceof = function (leftVal, rightVal) {
  while (leftVal.__proto__ !== null) {
    if (leftVal.__proto__ === rightVal.prototype) {
      return true
    }
    leftVal = leftVal.__proto__
  }
  return false
}
