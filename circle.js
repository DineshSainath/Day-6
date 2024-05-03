class Circle {
  //assuming this is the default values given for the question.
  constructor(radius = 1.0, color = 'red') {
    this.radius = 1.0
    this.color = 'red'

    if (typeof radius == 'number') this.radius = radius
    else console.log('invalid radius type')

    if (typeof color == 'string') this.color = color
    else console.log('invalid color type')
  }

  //getRadius():double
  getRadius() {
    return this.radius
  }

  //setRadius(radius:double):void
  setRadius(radius) {
    if (typeof radius === 'number') {
      this.radius = radius
    } else {
      console.log('Invalid radius type')
    }
  }

  //getColor():string
  getColor() {
    return this.color
  }

  //setColor(color:string):void
  setColor(color) {
    if (typeof color === 'string') {
      this.color = color
    } else {
      console.log('Invalid color type')
    }
  }

  //toString():string
  toString() {
    return `Circle[Radius = ${this.radius}, Color = ${this.color}]`
  }

  //getArea():double
  getArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  //Circumference():double
  getCircumference() {
    return 2 * Math.PI * this.radius
  }
}

let circle = new Circle(3.0, 'blue')

console.log(circle.getRadius())
console.log(circle.getColor())

circle.setRadius(4.0)
circle.setColor('black')

console.log(circle.getRadius())
console.log(circle.getColor())

console.log(circle.toString())
console.log(circle.getArea())
console.log(circle.getCircumference())
