"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Calculator_1 = require("../Utils/Calculator");
describe("Calculator", function () {
    it("should return sum of two number.", function () {
        var calculator = new Calculator_1.Calculator();
        chai_1.expect(calculator.add(10, 20)).to.equal(30);
    });
});
//# sourceMappingURL=Calculator.test.js.map