class Baseclass {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width,height,options);
      this.image = loadImage("sprites/base.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      
 
      var angle = this.body.angle;
  
      push();
      translate( this.body.position.x,  this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      //image(imageName,xPos,yPos,width,height)
      image(this.image,0,0,this.width,this.height);
      pop();
    };
  };
  