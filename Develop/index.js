// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'Please provide the instructions for use of your project'
    },
    {
        type: 'list',
        name: 'licenseChosen',
        message: 'Please select what license you would like for your project',
        choices: ['General Public License v3.0 (Does not allow distribution of closed source versions)', 'MIT license (Allows distribution of closed soource versions)', '']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((answers) => {
    console.log(answers);
});
};

// Function call to initialize app
init();
