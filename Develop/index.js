// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a name for your project (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description for your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give directions to install your project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide directions on how to use your project (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide directions for contributing to this project (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide details for testing this project (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license (Required)',
        choices: ['MIT', 'Common Development and Distribution', 'Apache', 'GNU General Public', 'Mozilla Public', 'Boost Software', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('This information is required, please fill it out.');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, data, err => {
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
    inquirer.prompt(questions);
};

// Function call to initialize app
init();
