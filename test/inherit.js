const Person = function () {
  this.name = 'Person'
  this.age = 42
  this.say = function () {
    console.log('my name:', this.name)
  }
}

Person.prototype.getName = function () {
  console.log(this.name)
}

const Child = function () {
  Person.call(this)
  this.name = 'Child'
}

Child.prototype.getName = function () {
  console.log(this.name)
}

Child.prototype.getAge = function () {
  console.log(this.name)
}

const newFunction = function (child, parent) {
  child.prototype = Object.assign(Object.create(child.prototype), parent.prototype)
  child.constructor = child
}

