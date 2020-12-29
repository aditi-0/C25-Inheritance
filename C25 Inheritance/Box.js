/*
TO CONVERT INTO A CHILD CLASS
1. Change the class name by adding the word 'extends' parentclass name
2. Don't change / delete the constructor
3. 'super' should be replaced with 'this.body = Bodies.rectangle'
4. Delete 'options'
*/


class Box  extends Baseclass{
  constructor(x, y, width, height) {
   
    super(x, y, width, height);
    this.image = loadImage("sprites/wood1.png");
   
  }
};
