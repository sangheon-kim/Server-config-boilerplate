import { expect } from "chai";

import { Calculator } from "../Utils/Calculator";

describe("Calculator", () => {
  it("should return sum of two number.", () => {
    const calculator = new Calculator();
    expect(calculator.add(10, 20)).to.equal(30);
  });
});
