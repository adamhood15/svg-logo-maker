const inquirer = require('inquirer');
const generate = require('./generate');
const {Triangle, Circle, Square} = require('./shapes');

//Function that initializes the application
//first generates user prompts that the user can answer
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
    //grabs the user responses and generates text code and shape code
    .then((response) => {

        const textCode = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.letters}</text>`

        //Checks to make sure that the user doesn't enter more than 3 letters
        if (response.letters.length <= 3 && response.shape === 'Triangle'){
            //instantiates a triangle class that passes in the response shape color and response shape
            const newTriangle = new Triangle(response.shapeColor, response.shape);
            const triangleCode = newTriangle.render();
            //passes the shape code and text code to the generate svg file function
            generate.renderSvg(triangleCode, textCode);

        } else if (response.letters.length <=3 && response.shape === 'Circle') {
            //instantiates a circle class that passes in the response shape color and response shape
            const newCircle = new Circle(response.shapeColor, response.shape); 
            const circleCode = newCircle.render();
            //passes the shape code and text code to the generate svg file function
            generate.renderSvg(circleCode, textCode);

        } else if (response.letters.length <=3 && response.shape === 'Square') {
            //instantiates a square class that passes in the response shape color and response shape
            const newSquare = new Square(response.shapeColor, response.shape);
            const squareCode = newSquare.render();
            //passes the shape code and text code to the generate svg file function
            generate.renderSvg(squareCode, textCode);

        //if user enters more than 3 letters, they will receive the following error message and the svg file will not be generated
        } else {
            return console.log('You must not input more than three letters, please try again.')
        }});
};

module.exports = {init};
