class Frame {
  constructor(style) {
    this.style = style
  }
}

class Tire {
  constructor(diameter, type) {
    this.diameter = diameter
    this.type = type
  }
}

class Bike {
  constructor(style, diameter, type) {
    this.frame = new Frame(style)
    this.tires = [new Tire(diameter, type), new Tire(diameter, type)]
  }
}

class MountainBike extends Bike {
  constructor() {
    super("mountain", 26.5, "dirt")
    this.shocks = 20
  }

  adjustShocks(setting) {
    this.shocks = setting
  }
}

class BMXBike extends Bike {
  constructor() {
    super("BMX", 20, "dirt")
    this.brakes = {
      "front": false,
      "back": true
    }
  }
}

class RacingBike extends Bike {
  constructor() {
    super("racing", 26.5, "road")
    this.rings = [3, 10]
  }

  gearSpeeds() {
    return this.rings[0] * this.rings[1]
  }
}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
}
