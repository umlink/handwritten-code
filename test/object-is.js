Object.prototype.is = function (x, y) {
  if (x === y) {
    return x!== 0 || 1 / x === 1 / y
  }
  return x !== x && y !== y; // NaN
}
