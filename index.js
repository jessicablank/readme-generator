var inquirer = require("inquirer");
var fs = require("fs");

promptUser();

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Title of Your Project?",
                name: "description",
            },
            // {
            //     type: "input",
            //     message: "Where are you from?",
            //     name: "location",
            // },
            // {
            //     type: "input",
            //     message: "Tell us about yourself:",
            //     name: "bio",
            // },
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
            console.log(answers)
        });
    }