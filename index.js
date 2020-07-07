const fs = require("fs");

//Reminder to install node modules (npm init -y) &  inquirer(npm i inquire --save)  
const inquirer = require("inquirer");

let licenseBadge;
let licenseURL;


//Get the current year
let date = new Date().getFullYear();
 
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "list",
        message: "Select a license for your project and press 'Enter':",
        name: "license",
        choices: ["MIT", "GNU General Public version 3", "Apache_2.0",],
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
        default: "Fork and Go! Ready to run in VS Code. "
    },
    {
        type: "input",
        message: "Explain how to use your project:",
        name: "usage",
    },
    {
        type: "input",
        message: "How can users contribute to this project?",
        name: "contribution",
        default: "Create a pull request. "
    },
    {
        type: "input",
        message: "How can users test your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your first and last name?",
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

]).then(function (answers) {
    switch (answers.license) {
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            licenseURL = "https://opensource.org/licenses/MIT"
            break;
        case "GNU General Public version 3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            licenseURL = "https://www.gnu.org/licenses/gpl-3.0"
            break;
        case "Apache_2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            licenseURL = "https://opensource.org/licenses/Apache-2.0"
            break;
        default:
            licenseBadge = "";
            licenseURL = "https://opensource.org/licenses"
            break;
    }


    const mdPage = `# ${answers.title}
${licenseBadge}
## Description:  
 ${answers.description}

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## Installation Instructions
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
You can reach the author, ${answers.name},  via [github](http://github.com/${answers.github}) and [email](mailto:${answers.email})
![GitHub](https://img.shields.io/github/followers/${answers.github}?label=follow&style=social)

## License
Copyright ${date} - present ${answers.name}.
This project is licensed under the terms of the ${answers.license} license. 
More information is available at [opensource.org/licenses](${licenseURL})
;`

    fs.writeFile("NEWREADME.md", mdPage, function (error) {
        if (error) {
            console.log(error)
            return console.log(error);
        }

        console.log('Success! Please copy your "NEWREADME.md" into github or save the file in your project folder as "README.md" ');
    });
});