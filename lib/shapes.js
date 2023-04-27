class Shape {
  constructor (color) {
    this.color = color;
  }

}


class Triangle extends Shape {
  constructor(color, shape) {
    super(color);
    this.shape = shape;
    this.render = function() {

    }
  }
}

class Circle extends Shape {
  constructor(color, shape) {
    super(color);
    this.shape = circle;
    this.render = function() {
      
    }
  }
}

class Square extends Shape{
  constructor(color, shape) {
    super(color);
    this.shape = shape;
    this.render = function() {
      
    }
  }
}

module.exports = Triangle;
module.exports = Circle;
module.exports = Square;