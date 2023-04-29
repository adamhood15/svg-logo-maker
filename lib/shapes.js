class Shape {
  constructor (color, shape) {
    this.color = color;
    this.shape = shape;
  }

}


class Triangle extends Shape {
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {

    }
  }
}

class Circle extends Shape {
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {
      
    }
  }
}

class Square extends Shape{
  constructor(color, shape) {
    super(color, shape);
    this.render = function() {
      
    }
  }
}


module.exports = Triangle;
module.exports = Circle;
module.exports = Square;