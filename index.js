const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

class Svg {}

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
