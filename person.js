class Person {
  constructor(name = '', age = 0, location = '', phone = '') {
    if (typeof name === 'string') this.name = name
    else console.log('Invalid name type')

    if (typeof age === 'number') this.age = age
    else console.log('Invalid age type')

    if (typeof location === 'string') this.location = location
    else console.log('Invalid location type')

    if (typeof phone === 'string') this.phone = phone
    else console.log('Invalid phone type')
  }
  // Setter method for name
  setName(name) {
    if (typeof name === 'string') {
      this.name = name
    } else {
      console.log('Invalid name type')
    }
  }

  // Getter method for name
  getName() {
    return this.name
  }

  // Setter method for age
  setAge(age) {
    if (typeof age === 'number') {
      this.age = age
    } else {
      console.log('Invalid age type')
    }
  }

  // Getter method for age
  getAge() {
    return this.age
  }

  // Setter method for location
  setLocation(location) {
    if (typeof location === 'string') {
      this.location = location
    } else {
      console.log('Invalid location type')
    }
  }

  // Getter method for location
  getLocation() {
    return this.location
  }

  // Setter method for phone
  setPhone(phone) {
    if (typeof phone === 'string') {
      this.phone = phone
    } else {
      console.log('Invalid phone type')
    }
  }

  // Getter method for phone
  getPhone() {
    return this.phone
  }
}

let person = new Person('Sam', 30, 'Chennai', '123-456-7890')
console.log(person.getName())
console.log(person.getAge())
console.log(person.getLocation())
console.log(person.getPhone())

person.setName('Aisha')
console.log(person.getName())
