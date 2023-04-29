const {writeFile} = require('fs');


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