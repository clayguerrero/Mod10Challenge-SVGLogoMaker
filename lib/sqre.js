class Shape {
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<rect width='100' height='100'  fill='${this.color}'>`;
  }
}

module.exports = Square
