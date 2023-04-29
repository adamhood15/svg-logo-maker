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
            message: 'What color would you like your text to be? You may type in a color or a hexadecimal code.',
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

        const textCode = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.letters}</text>`

        if (response.letters.length <= 3 && response.shape === 'Triangle'){
            const newTriangle = new Triangle(response.shapeColor, response.shape);
            const triangleCode = newTriangle.render();
            generate.renderSvg(triangleCode, textCode);

        } else if (response.letters.length <=3 && response.shape === 'Circle') {
            const newCircle = new Circle(response.shapeColor, response.shape); 
            const circleCode = newCircle.render();
            generate.renderSvg(circleCode, textCode);

        } else if (response.letters.length <=3 && response.shape === 'Square') {
            const newSquare = new Square(response.shapeColor, response.shape);
            const squareCode = newSquare.render();
            generate.renderSvg(squareCode, textCode);

        } else {
            return console.log('You must not input more than three letters, please try again.')
        }});
};

module.exports = {init};
