const {writeFile} = require('fs');


function render(shape, data) {
    console.log(shape);
    console.log(data);
writeFile('./examples/logo.svg', data, (err) => {
    if(err) {
        return console.log(err)
    } else {
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="red" />
        
        <circle cx="150" cy="100" r="80" fill="green" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        
        </svg>`
        
        return console.log('Generated logo.svg file.')
    }
} );

}

module.exports = {render};