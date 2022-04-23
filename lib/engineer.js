// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const Employee = require('./employee');
// class extends employee class
// with addition of github username and getGithub();

class Engineer extends Employee {
    constructor(githubUsername) {
        this.githubUsername = githubUsername;
    }
    getGithub() {

    }
    getRole() {
        return Engineer;
    }
}