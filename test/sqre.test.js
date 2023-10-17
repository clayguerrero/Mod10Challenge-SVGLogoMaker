const Square = require("../lib/sqre.js");

describe("Square", () => {
  describe("render", () => {
    it("should return a svg tag that has the correct color", () => {
      const square = new Square();
      let color = "green";
      square.setColor(color);
      expect(square.render()).toEqual(
        `<rect width='100' height='100'  fill='${color}'>`
      );
    });
  });
});
