const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // super called as a function to get parameters from parent
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // overrides parent getRole function
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;