// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
userArr = [];

const generateLicense = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the full title of your project'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a full description of your project'
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'Please provide the instructions for installation and use of your project'
    },
    {
        type: 'list',
        name: 'licenseChosen',
        message: 'Please select what license you would like for your project',
        choices: ['GPL', 'MIT']
    },
    {
        type: 'input',
        name: 'contibute',
        message: 'Please provide instructions on how other developers can contribute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of how to use any tests you created for your project'
    }
];
// to do!!!++____ insert a table of contents based on information post description

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, fileName, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((projectInfo) => {
    console.log(projectInfo);
    userArr.push(projectInfo);
    console.log(userArr[0].projectTitle);
});
};

// Function call to initialize app
init();
