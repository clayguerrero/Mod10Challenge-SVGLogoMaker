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
        this.color = "blue"
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill= ${this.color} />`
    }

}
class Circle extends Shape {

}
class Square extends Shape {

}
