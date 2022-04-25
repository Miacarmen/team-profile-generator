const inquirer = require('inquirer');
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const Employee = require('../lib/employee');
// class extends employee class
// with addition of github username and getGithub();

class Engineer extends Employee {
    constructor(githubUsername) {
        this.githubUsername = githubUsername;
    }
    getGithub() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: 'github',
                    message: "Enter Employee\'s GitHub Username"
                }
            ])
            .then((response) => {
                this.githubUsername = response;
            })
    }
    getRole() {
        return Engineer;
    }
}


module.exports = Engineer;