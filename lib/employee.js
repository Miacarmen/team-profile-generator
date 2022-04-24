// Parent class
// name, id, email, getName(), getId(), getEmail(), getRole()


class Employee {
    constructor(role, name, id, email) {
        this.employees = [];
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function() {
        
        }
        this.getId = function() {

        }
        this.getEmail = function() {

        }
        this.getRole = function() {
            if(role === 'Manager') {
                return Manager;
            } 
        }
       
    }
    
}





module.exports = Employee;