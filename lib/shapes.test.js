const { Triangle,Circle,Square } = require('./shapes.js');

describe('Triangle', () => {
    describe('render', () => {
      it('should take a color and render a triangle', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });

describe('Circle', () => {
  describe('render', () => {
    it('should take a color and render a circle', () => {
      const shape = new Circle('blue');
      expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="80" fill="blue"/>');
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    it('should take a color and render a square', () => {
      const shape = new Square('blue');
      expect(shape.render()).toEqual('<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="blue" />');
    });
  });
});