class Shape {
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape{
    setColor(color) {
        this.color = color
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill= ${this.color} />`
    }

}
class Circle extends Shape {
  setColor(color) {
    this.color = color
  }
  render() {
    return `<circle cx='50 cy=50 r='50' fill=${this.color}/>`
  }
}
class Square extends Shape {
  setColor(color) {
    this.color = color
  }
  render() {
    return `<rect width='100' height='100'  fill=${this.color}`
  }
}
