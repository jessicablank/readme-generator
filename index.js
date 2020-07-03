var inquirer = require("inquirer");
var fs = require("fs");

promptUser();

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Briefly describe your project:",
                name: "description",
            },
            {
                type: "input",
                message: "Provide installation instructions for your project:",
                name: "installation",
            },
            {
                type: "input",
                message: "What is your first name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your github username?",
                name: "github",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
        ])
        .then(function (answers) {
            renderMD(answers)
        });
    }
    function renderMD(data) {
        let mdPage = `# ${data.title}
## Description:  
${data.description}
    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation Instructions
${data.installation}

## Usage

## Contributing

## Tests

## Questions
You can reach the author, ${data.name}, via [github](http://github.com/${data.github}) and [email](mailto:${data.email})
`

    fs.writeFile("TEST.md", mdPage, function(error) {
        if (error) {
          console.log(error)
          return console.log(error);
        }
        console.log("Success!");
      });  
    }