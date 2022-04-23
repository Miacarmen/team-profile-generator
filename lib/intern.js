// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const Employee = require('./employee');
// intern extends the employee class
// with the addition of school and getSchool()

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        return Intern;
    }
}