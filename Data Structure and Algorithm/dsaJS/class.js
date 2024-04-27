class Cookie {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
  setColor(color) {
    this.color = color
  }
}

let cookie1 = new Cookie('green')

let cookie2 = new Cookie('red')

cookie1.setColor('yellow')
console.log(cookie1.getColor())

cookie2.setColor('black')
console.log(cookie2.getColor())
