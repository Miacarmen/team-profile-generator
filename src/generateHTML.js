// create html document based on user input
function generateHtml(array) {
  var employeeCards = ``;
  array.forEach((employee) => {
    var other = ``;
    if (employee.getRole() === "Manager") {
      other = `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
    } else if (employee.getRole() === "Engineer") {
      other = `<li class="list-group-item">GitHub: <a href="#">${employee.getGithub()}</a></li>`;
    } else {
      other = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    }

    // create new employee card
    var card = ` <div class="mx-2 mb-3">
        <div class="card" style="max-width: 18rem;">
          <div class="card-header text-white bg-dark">
            ${employee.getName()}<br>
            ${employee.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:myemailaddress@gmail.com" target="_blank">${employee.getEmail()}</a></li>
            ${other}
          </ul>
        </div>
      </div>`;

    employeeCards += card;
  });

  // html string populated with employee cards
  const htmlStr = `<!doctype html>
    <html lang="en">
    
    <head>
    
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
      <title>My Team</title>
    </head>
    
    <body style="font-family: Verdana, Geneva, Tahoma, sans-serif">
    
      <div class="container">
        <div class="jumbotron" style="background-color: rgb(244, 227, 244)">
          <h1 class="display-4 text-center"><strong>My Team</strong></h1>
    
          <hr class="my-4">
    
          <div class="d-flex mt-5 justify-content-center">
           ${employeeCards}
          </div>
        <div>
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

  return htmlStr;
}

module.exports = generateHtml;
