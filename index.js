const inquirer = require("inquirer");
const Triangle = require('./lib/tri')
const Circle = require('./lib/circ')
const Square = require('./lib/shapes')
const { writeFile } = require("fs").promises;

class Svg {
  constructor() {
    this.text = '';
    this.shape = '';
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}</svg>`
  }
  setText(text, textColor) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  setShape(shape) {
    this.shape = shape.render()
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter up to 3 characters for inner text of logo.",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter a color keyword or a hexadecimal number for the text color.",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your logo",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter a color keyword or a hexadecimal number for the shape color.",
  },
];

function writeSVGFile(name, data) {
  const newData = JSON.stringify(data);
  console.log(newData)
  writeFile(name, newData);
}

function generateLogo(answers) {
  const logo = new Svg(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  logo.setText(answers.text, answers.textColor)
  logo.setShape(shapeSelectHandler(answers.shape,answers.shapeColor))
  return logo.render()
}

function shapeSelectHandler(shape,color) {
  let newShape
  if (shape === 'Triangle') {
    newShape = new Triangle()
    newShape.setColor(color)
    return newShape
  } else if (shape === 'Circle') {
    newShape = new Circle
    newShape.setColor(color)
    return newShape
  } else {
    newShape = new Square()
    newShape.setColor(color)
    return newShape
  }
}

function init() {
  console.log("started");
  inquirer
    .prompt(questions)
    .then((res) => writeSVGFile("logo.svg", generateLogo(res)))
    .then(() => console.log("finished"));
}

init();
