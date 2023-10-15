const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

class Svg {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shape = "";
    this.shapeColor = "";
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
  setText(text) {}
  setTextColor(textColor) {}
  setShape(shape) {}
  setShapeColor(shapeColor) {}
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

function init() {
  console.log("started");
  inquirer
    .prompt(questions)
    .then((res) => console.log(res))
    .then(() => console.log("finished"));
}

init();
