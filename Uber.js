class Uber {
  constructor(name = '', distance = 0.0, phone = '') {
    if (typeof name === 'string') this.name = name
    else console.log('Invalid name type')

    if (typeof distance === 'number') this.distance = distance
    else console.log('Invalid distance type')

    if (typeof phone === 'string') this.phone = phone
    else console.log('Invalid phone type')
  }

  //name
  setName(name) {
    if (typeof name === 'string') {
      this.name = name
    } else {
      console.log('Invalid name type')
    }
  }

  getName() {
    return this.name
  }

  //distance
  setDistance(distance) {
    if (typeof distance === 'double') {
      this.distance = distance
    } else {
      console.log('Invalid distance type')
    }
  }

  getDistance() {
    return this.distance
  }

  //phone
  setPhone(phone) {
    if (typeof phone === 'string') {
      this.phone = phone
    } else {
      console.log('Invalid phone type')
    }
  }

  getPhone() {
    return this.phone
  }

  //to calculate the trip rate
  getPrice() {
    const costPerKm = 20 //assuming
    let price = costPerKm * this.distance
    return price
  }
}

const myUber = new Uber('Sam', 10, '1234567890')
console.log(myUber.getPrice())
