class Gym {
  constructor() {
    this.members = []
  }

  newMember(member) {
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i].id === member.id) {
        return console.log('member already exists')
      }
    }
    this.members[this.members.length++] = member
  }

  removeMember(member) {
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i].id === member.id) {
        this.members.splice(i, 1)
        break;
      }
    }
  }

  newClass(className) {
    this[className.name] = className
  }

  removeClass(className) {
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i].id === member.id) {
        this.members.splice(i, 1)
        break;
      }
    }
  }
}

class Member {
  constructor(id, name, age, standing) {
    this.id = id
    this.name = name
    this.age = age
    this.standing = standing
  }

  changeStanding() {
    return this.standing === "good" ? this.standing = "bad" : this.standing = "good"
  }
}

class Class {
  constructor(className) {
    this.name = className
    this.students = []
  }

  addStudent(member) {
    this.students[this.students.length++] = member
  }

  removeStudent(member) {
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].id === member.id) {
        this.students.splice(i, 1)
        break;
      }
    }
  }
}

// try at: https://repl.it/Ieti/1
