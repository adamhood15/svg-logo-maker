const { error } = require('console');
const inquirer = require('inquirer');
const { throwError } = require('rxjs');
const generate = require('./generate');

function init() {
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What letters would you like on your logo? Please type in a maximum of 3 letters',
        name: 'letters'
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapeColor'
    },
])
.then((response) => {
    if (response.letters.length < 3){
        generate.render(JSON.stringify(response))
    } else {
        return console.log('You must not input more than three letters, please try again.')
    }
        
    }
        
        );

};

module.exports = {init};
