const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");

// WHEN I am prompted for my team members and their information

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated that displays a nicely formatted team roster based on user input

// get client input data
// do something with that data

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
  },

  {
      type: 'list',
      name: 'role',
      message: 'Select Employee\'s role from the list below',
      choices: ['Manager', 'Engineer', 'Intern']
  }
  .then(response => {
      console.log(response);
      const data = employee(response);
      writeToFile(data);
  })
]);

// if epmloyee type === Manager
// ask questions + manager questions

// if employee type === Engineer
// ask questions + engineer questions

// if employee type === Intern
// ask questions + intern questions

function writeToFile(data) {
  fs.writeFile("../dist/index.html", data, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Success");
    }
  });
}



function generateHtml() {}
