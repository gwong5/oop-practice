function Bike() {
  this.movement = false
  this.rings = [3, 7]
  this.tires = [new Tire(), new Tire()]

  this.isMoving = function() {
    return this.movement
  }

  this.pedal = function() {
    if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
      throw new Error("Can't pedal with a flat tire")
    } else {
      this.movement = true
    }
  }

  this.brake = function() {
    this.movement = false
  }

  this.gearSpeeds = function() {
    return this.rings[0] * this.rings[1]
  }
}

function Frame() {
  // your code here
}

function Tire() {
  this.flat = false

  this.puncture = function() {
    this.flat = true
  }

  this.repair = function() {
    this.flat = false
  }

  this.isFlat = function () {
    return this.flat
  }
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
