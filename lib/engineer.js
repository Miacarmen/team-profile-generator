class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {};

    // overrides parent getRole function
    getRole() {
        return 'Engineer';
    };
}