const inquirer = require('inquirer');
const generate = require('./generate');
const {Triangle, Circle, Square} = require('./shapes');


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
    if (response.letters.length <= 3 && response.shape === 'Triangle'){
        const newTriangle = new Triangle(response.shapeColor, response.shape);
        console.log(newTriangle.render);
        generate.render(newTriangle, response);
    } else if (response.letters.length <=3 && response.shape === 'Circle') {
        const newCircle = new Circle(response.shapeColor, response.shape); 
        generate.render(newCircle, response);
    } else if (response.letters.length <=3 && response.shape === 'Square') {
        const newSquare = new Square(response.shapeColor, response.shape);
        generate.render(newSquare, response);
    } else {
        return console.log('You must not input more than three letters, please try again.')
    }

    }
        
        );

};

module.exports = {init};
