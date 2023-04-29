const {Square} = require('../shapes')

it('should render svg code that applies the color of the shape and the correct format', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect x="95" y="45" height="110" width="110" fill="blue" />`);
})