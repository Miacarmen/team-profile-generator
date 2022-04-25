class Manager extends Employee {
    constructor(officeNumber) {
        // super called as a function to get parameters from parent
        super(name, id, email); 
            this.officeNumber = officeNumber;
    }
    // overrides parent getRole function
    getRole() {
        return 'Manager';
    };
}