const {writeFile} = require('fs');

//Function that creates the code and writes the code to the logo.svg file
//Takes in the shapeCode and textCode that was generated from the prompt.js file
function renderSvg(shapeCode, textCode) {
    svgCode = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    ${shapeCode}
    
    ${textCode}
    
    </svg>`

    writeFile('./examples/logo.svg', svgCode, (err) => {
        if(err) {
            return console.log(err)
        } else {
            svgCode;
            return console.log('Generated logo.svg file.')
        }
} );

}

module.exports = {renderSvg};