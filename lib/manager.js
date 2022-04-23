// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const Employee = require('./employee');
// class extends employee class
// with addition of officeNumber 

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    }
}


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team