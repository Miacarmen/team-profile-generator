const Employee = require("../lib/Employee");

// describe group of tests to be performed and a cb
describe("Employee class", () => {
  describe("getName method", () => {
    it("check if employee called the class constructor", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });
  });
});

