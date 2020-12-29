/*
TO CONVERT INTO A CHILD CLASS
1. Change the class name by adding the word 'extends' parentclass name
2. Don't change / delete the constructor
3. 'super' should be replaced with 'this.body = Bodies.rectangle'
4. Delete 'options'
*/

class Log extends Baseclass{
    constructor(x, y, height, angle) {
      
      super(x, y, 20, height);
      this.image = loadImage("sprites/wood2.png");
      
      Matter.Body.setAngle(this.body, angle);
      
    }
  };
  