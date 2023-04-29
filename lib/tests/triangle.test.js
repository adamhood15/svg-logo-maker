const {Triangle} = require('../shapes')

it('should render svg code that applies the color of the shape and the correct format', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})