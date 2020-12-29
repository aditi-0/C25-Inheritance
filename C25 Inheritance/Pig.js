/*
TO CONVERT INTO A CHILD CLASS
1. Change the class name by adding the word 'extends' parentclass name
2. Don't change / delete the constructor
3. 'super' should be replaced with 'this.body = Bodies.rectangle'
4. Delete 'options'
*/

class Pig extends Baseclass{
    constructor(x, y) {
      
      super(x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png");
      
    }
  };
  