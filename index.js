const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { writeFile } = require('fs').promises

class Svg {
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;

  }
  render() {
    return `<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${this.shape}
    </svg>;`;
  }
  setText(text, textColor) {

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
  const newData = JSON.stringify(data)
  writeFile(name, newData)
}

function generateLogo(answers) {
  const newAns = JSON.parse(answers)
  console.log(newAns.text, newAns.textColor, newAns.shape);
  const logo = new Svg(newAns.text, newAns.textColor, newAns.shape)
  return logo
}

function init() {
  console.log("started");
  inquirer.prompt(questions)
    .then((res) => writeSVGFile('logo.svg', generateLogo(JSON.stringify(res))))
    .then(() => console.log("finished"));
}

init();
