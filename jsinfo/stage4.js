// Error creating an instance

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  super(name) {
    this.name = name
  }
  constructor() {
    this.created = Date.now()
  }
}

// Extended clock

class ExtendedClock extends Clock {
  constructor(options) {
    let { precision } = options || 1000
    super(options)
    this._precision = precision
  }
  start() {
    this._render()
    this._timer = setInterval(() => this._render(), this._precision)
  }
}

// tests: http://plnkr.co/edit/ILJ3qO5Nc6mIIckeDDWk?p=preview
