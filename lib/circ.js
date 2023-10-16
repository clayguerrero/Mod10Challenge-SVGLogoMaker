class Shape {
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx='50 cy=50 r='50' fill='${this.color}'/>`;
  }
}

module.exports = Circle
