// Create new Calculator

function Calculator() {
  this.read = function() {
    this.a = +prompt('a')
    this.b = +prompt('b')
  }
  
  this.sum = function() {
    return this.a + this.b
  }
  
  this.mul = function() {
    return this.a * this.b
  }
}

const calculator = new Calculator
calculator.read()
alert(calculator.sum())
alert(calculator.mul())

// tests: http://plnkr.co/edit/j2fl0Joka30Aa2ZFiZ5C?p=preview

// Create new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function() {
    this.value += +prompt('b')
  }
}

// tests: http://plnkr.co/edit/utjh9a1WM62CoNX13yZL?p=preview

// Create an extendable calculator

function Calculator() {
  this.calculate = function(string) {
    const i = string.split(' ')
    return Calculator[i[1]](+i[0], +i[2])
  }

  this.addMethod = function(name, func) {
    Calculator[name] = func
  }
}

// tests: http://plnkr.co/edit/2aPxM5lQU7MqwnFoanEz?p=preview
