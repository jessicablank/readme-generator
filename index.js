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
            // {
            //     type: "input",
            //     message: "What is your github username?",
            //     name: "github",
            // },
            // {
            //     type: "input",
            //     message: "What is your Linkedin username?",
            //     name: "linkedin",
            // },
        ])
        .then(function (answers) {
            renderMD(answers)
        });
    }
    function renderMD(data) {
        let mdPage = `## ${data.title} 
    
${data.description}
    
## Table of Contents:
        * [Installation](#Installation)

        * [Instructions](#Instructions)
        
        * [License](#License)
        
        * [Contributors](#Contributors)
        
        * [Author](#Author)
        
        * [Tests](#Tests)
## Installation
    ${data.installation}`




    fs.writeFile("TEST.md", mdPage, function(error) {
        if (error) {
          console.log(error)
          return console.log(error);
        }
        console.log("Success!");
      });  
    }