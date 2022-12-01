const getType = (val) => {
  if (val === null) return 'null'
  if (typeof val === 'object') {
    return Array.isArray(val) ? 'array' : 'object'
  }
  return typeof val
}
