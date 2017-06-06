// An error in inheritence

function Animal(name) {
  this.name = name
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks')
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = Animal.prototype

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!")
}

// rabbit prototype was changed to Animal object and Rabbit.prototype.walk makes all other Animals bounce

// Rewrite to prototypes

function Clock({ template }) {
  this._template = template
}

Clock.prototype._render = function() {
  let date = new Date()

  let hours = date.getHours()
  if (hours < 10) hours = '0' + hours

  let mins = date.getMinutes()
  if (mins < 10) min = '0' + mins

  let secs = date.getSeconds()
  if (secs < 10) secs = '0' + secs

  let output = this._template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs)

  console.log(output)
}
Clock.prototype.stop = function() {
  clearInterval(this._timer)
}

Clock.prototype.start = function() {
  this._render()
  this._timer = setInterval(() => this._render, 1000)
}

// test: http://plnkr.co/edit/XVriM1TP8nGATqh0vJOz?p=preview

// Rewrite to class

class Cluck {
  constructor({ template }) {
    this._template = template
  }

  _render() {
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this._timer)
  }

  start() {
    this._render()
    this._timer = setInterval(() => this._render(), 1000)
  }
}

// tests: http://plnkr.co/edit/tBFyKJi8a16btm6YsOhk?p=preview
