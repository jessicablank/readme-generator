const fs = require("fs");
const util = require("util");

const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

main();


//Run the Application
async function main() {
    try {
        const answers = await promptUser();
        const mdPage = renderMD(answers);
        await writeFileAsync("NEWREADME.md", mdPage);
        console.log('Success! Please copy your "NEWREADME.md" into github or save the file in your project folder as "README.md" ');
    } catch (error) {
        console.log(error);
    }

}
//Get the current year
let date = new Date().getFullYear();



//Returns promise for user response object. 
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "list",
            message: "Select a license for your project and press 'Enter':",
            name: "license",
            choices: ['MIT', 'Apache_2.0', 'GNU'],
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
            default: "Ready to run in VS Code. "
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
    ])
}

// const licenseURL = 

// var licenseURL = answers.license;
// switch (licenseURL) {
//     case "Apache_2.0":
//         console.log("Apache-2.0");
//     break;
//     case "GNU":
//         console.log("gpl-license");
//     break;
//     default:
//          "MIT";
//     }
//   ;

//Returns markdown string given user input
function renderMD(answers) {
    //adjust license text for url link 
    return mdPage = `# ${answers.title}
## Description:  
![License](https://img.shields.io/badge/license-${answers.license}-brightgreen)
![GitHub](https://img.shields.io/github/followers/${answers.github}?label=follow&style=social)

${answers.description}

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## Installation Instructions
    -${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.installation}

## Tests
${answers.installation}

## Questions
You can reach the author, ${answers.name},  via [github](http://github.com/${answers.github}) and [email](mailto:${answers.email})


## License
Copyright ${date} - present ${answers.name}.
This project is licensed under the terms of the ${answers.license} license. 
More information is available at [opensource.org/licenses](http:opensource.org/licenses/${answers.licenseL})
`
}



