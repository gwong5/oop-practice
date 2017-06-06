// Create a calculator

const calculator = {
  read: function() {
    a = prompt('a', 0)
    b = prompt('b', 0)
  },
  sum: function() {
    return parseInt(a) + parseInt(b)
  },
  mul: function() {
    return a * b
  }
}

alert(calculator.sum())
alert(calculator.mul())
// tests: http://plnkr.co/edit/yuHvt74T3bLaZuJ9Eiei?p=preview

// Chaining

let ladder = {
  step: 0,
  up: function() {
    this.step++
    return this
  },
  down: function() {
    this.step--
    return this
  },
  showStep() {
    alert(this.step)
  }
}

// tests: http://plnkr.co/edit/0acqT8osxhjlVyuHG5YF?p=preview
