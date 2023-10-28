class Shapes {
    constructor(bgColor) {
        this.bgColor = bgColor;
    }
};

class Circle extends Shapes{
    constructor(bgColor) {
        super(bgColor)
    }
    render(){
        return `<circle cx="50%" cy="50%" r="80" fill="${this.bgColor}"/>`
    }
};

class Triangle extends Shapes{
    constructor(bgColor) {
        super(bgColor)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`
    }
};

class Square extends Shapes{
    constructor(bgColor) {
        super(bgColor)
    }
    render(){
        return `<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="${this.bgColor}" />`
    }
};

class Svg {
    constructor(text,textColor,shape,bgColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.bgColor = bgColor;
    }
    render(){
        let shape;
        let y;

        if (this.shape === 'circle'){
            shape = new Circle(this.bgColor);
            y = 113;
        } else if (this.shape === 'triangle'){
            shape = new Triangle(this.bgColor);
            y = 135;
        } else {
            shape = new Square(this.bgColor);
            y = 113;
        }


        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
            </text>
        </svg> `;
    }
}


function generateLogo(data) {

    let shape;


    
    if (data.shape === 'circle'){
        shape = new Circle(data.bgColor);
    } else if (data.shape === 'triangle'){
        shape = new Triangle(data.bgColor);
    } else {
        shape = new Square(data.bgColor);
    }

    return `
    <svg width="300" height="200">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">
          ${data.text}
        </text>
    </svg> `;
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
    generateLogo,
    Svg
  }
  