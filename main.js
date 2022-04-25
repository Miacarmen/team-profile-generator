const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("../lib/Employee");

// user prompted for team members and their information
// get client input data
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
    // if epmloyee type === Manager
    // ask questions + manager questions
    when: (answers) => answers.roletype === ('Manager').then(() => {
        new inquirer.prompt([
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter Manager\'s office number'
            }
        ])
    }),
     // if employee type === Engineer
    // ask questions + engineer questions
    when: (answers) => answers.roletype === ('Engineer').then(() => {
        new inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter Engineer\'s GitHub username'
            }
        ])
    }),
    // if employee type === Intern
    // ask questions + intern questions
    when: (answers) => answers.roletype === ('Intern').then(() => {
        new inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Enter the name of the school this Intern is currently attending'
            }
        ])
    })
  },
  // add question to exit or add another team member
  {
    type: "confirm",
    name: "",
    message: "Would you like to add another Team Member?"
    // if yes, restart prompt
    // if no, prompt with another question to exit
  },

])
.then((answers) => {
  const data = generateHtml(answers);
  writeToFile(data);
});

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated that displays a nicely formatted team roster based on user input



function writeHtmlFile(data) {
  fs.writeHtmlFile("../dist/index.html", data, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Success");
    }
  });
}

// render HTML document with input responses
// use responses to populate html cards
function generateHtml(inputObj) {
  console.log(inputObj);

  const htmlStr = `<!doctype html>
  <html lang="en">
  
  <head>
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  
      <link rel="stylesheet" href="./assets/styles.css">
    <title>Hello, world!</title>
  </head>
  
  <body>
  
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4 text-center">My Team</h1>
  
        <hr class="my-4">
  
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style="max-width: 18rem;">
              <div class="card-header text-white bg-dark">
                ${data.name}<br>
                ${data.role}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">Other</li>
              </ul>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  
  
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"></script>
  
    <script src="main.js"></script>
  </body>
  
  </html>`;

  writeHtmlFile(htmlStr);
}

generateHtml();
