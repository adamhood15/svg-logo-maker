class Shape {
  constructor (color, shape) {
    this.color = color;
    this.shape = shape;
    this.shape = shape;
  }

}


class Triangle extends Shape {
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }
  }
}

class Circle extends Shape {
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {
      const circleHTML = `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
  }
}

class Square extends Shape{
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {
      const squareHTML = `<rect x="95" y="45" height="110" width="110" fill="${color}" />`
    }
  }
}


module.exports = {
  Shape: Shape,
  Circle: Circle,
  Triangle: Triangle,
  Square: Square
}
