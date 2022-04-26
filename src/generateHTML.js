function generateHtml(array) {
  
    var employeeCards = ``;
    array.forEach((employee) => {
        var other = ``;
        if(employee.getRole() === "Manager") {
            other = `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`
        } else if(employee.getRole() === "Engineer") {
            other = `<li class="list-group-item">GitHub: ${employee.getGithub()}</li>`
        } else {
            other = `<li class="list-group-item">Office School: ${employee.getSchool()}</li>`
        }

        var card = ` <div class="col-sm-6">
        <div class="card" style="max-width: 18rem;">
          <div class="card-header text-white bg-dark">
            ${employee.getName()}<br>
            ${employee.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.getId()}</li>
            <li class="list-group-item">${employee.getEmail()}</li>
            ${other}
          </ul>
        </div>
      </div>`

      employeeCards += card;
    })

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
           ${employeeCards}
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
  
    return htmlStr;
  }

  module.exports = generateHtml;