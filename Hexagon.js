class Hex 
{
    constructor(x,y,r) 
    {   var options = 
        {
            isStatic : false,
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }

        this.image = loadImage("Hexagon.png");
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    }

    display()
    {
      var angle = this.body.angle;
      var pos = this.body.position
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,this.r, this.r);
      pop();
    }
}