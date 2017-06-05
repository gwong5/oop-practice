function Bike(name, price) {
  this.name = name
  this.price = price
  this.tires = [new Tire(), new Tire()]
  this.frame = new Frame()
  this.rings = [3, 7]
  this.brakes = {
    "front": true,
    "back": true
  }
}

function Frame(color, size, style) {
  this.color = color || "black"
  this.size = size || 55
  this.style = style || "street"
}

function Tire(diameter, type) {
  this.diameter = diameter || 22
  this.type = type || "street"
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
