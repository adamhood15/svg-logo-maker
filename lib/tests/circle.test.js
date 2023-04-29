const {Circle} = require('../shapes')

it('should render svg code that applies the color of the shape and the correct format', () => {
    const shape = new Circle();
    shape.setColor("#000080");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="#000080" />`);
})