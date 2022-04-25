// Parent class
// name, id, email, getName(), getId(), getEmail(), getRole()

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");


class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function(name) {
            return name;
        }
        this.getId = function(id) {
            return id;
        }
        this.getEmail = function(email) {
            return email;
        }
        this.getRole = function() {
            return Employee;
        }
       
    }
    
}





module.exports = Employee;