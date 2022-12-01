class LRUCache {
  constructor (max =  10) {
    this.max = max
    this.cache = new Map() // k-v
  }
  put (name, val) {
    this.cache.set(name, val)
    const cacheLen = this.cache.size
    if (cacheLen > this.max) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
  get (name) {
    const val = this.cache.get(name)
    val && this.cache.delete(name)
    return val
  }
}

let cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2);
cache.put(3, 3);

console.log(cache.get(2))
console.log(cache.keys(2))
