const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHTML")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// user prompted for team members and their information
// get client input data
var employeeArr = [];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employee's name:",
      },

      {
        type: "number",
        name: "id",
        message: "Enter employee's ID:",
      },

      {
        type: "input",
        name: "email",
        message: "Enter employee's email:",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            return true;
          } else {
            console.log("Not a valid email. Please try again");
            return false;
          }
        },
      },

      {
        type: "list",
        name: "role",
        message: "Select Employee's role from the list below",
        choices: ["Manager", "Engineer", "Intern"],
       
      },

      {
        type: "number",
        name: "officeNumber",
        message: "Enter Manager's office number",
        when: (answers) => answers.role === 'Manager'
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer's GitHub username",
        when: (answers) => answers.role === 'Engineer'
      },
      {
        type: "input",
        name: "school",
        message:
          "Enter the name of the school this Intern is currently attending",
          when: (answers) => answers.role === 'Intern'
      },
      
    ])
    .then((answers) => {
      if(answers.role === "Manager") {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArr.push(manager);
      } else if(answers.role === "Engineer") {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArr.push(engineer);
      } else {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArr.push(intern);
      }
      menu();
    });
}

// add function to ask question to exit or add another team member
function menu() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "option",
      message: "Would you like to do next?",
      choices: ['Add another Team Member', 'Build Team Profile']
      // if yes, restart prompt
      // if no, prompt with another question to exit
    }
  ])
  .then((answers) => {
    if(answers.option === "Add another Team Member") {
      init();
    } else {
      writeHtmlFile(employeeArr);
    }
  })
}
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated that displays a nicely formatted team roster based on user input

function writeHtmlFile(data) {
  fs.writeFile("./dist/index.html", generateHtml(data), function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Success");
    }
  });
}

init();



