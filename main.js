const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("../lib/employee");



// WHEN I am prompted for my team members and their information

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated that displays a nicely formatted team roster based on user input

// get client input data
const questions = ([
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
    type: "list",
    name: "role",
    message: "Select Employee's role from the list below",
    choices: ["Manager", "Engineer", "Intern"],
    // if epmloyee type === Manager
    // ask questions + manager questions

    // if employee type === Engineer
    // ask questions + engineer questions

    // if employee type === Intern
    // ask questions + intern questions
  }
  // then use responses to populate html cards
]);


function init() {
    inquirer.prompt(questions).then((response) => {
        const data = generateHtml(response);
        writeToFile(data);
    })
}


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
                Name<br>
                Role
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email</li>
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
