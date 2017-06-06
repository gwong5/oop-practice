// Hello, object

const user = {}

user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// Multiply numeric properties by 2

function multiplyNumeric(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] = obj[prop] * 2
    }
  }
}

// tests: http://plnkr.co/edit/tmnepAZHKmxzMz8OJugo?p=preview
