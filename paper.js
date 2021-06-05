class paper{
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        'restituition': 0.3,
        'friction': 0,
        'density': 1.2
    }
    // assign options to the rubber ball
      this.x=x;
      this.y=y;
      this.r=r

      this.image=loadImage("sprites/paper.png")

      this.body =Bodies.circle(this.x, this.y, (this.r-20)/2, options)
      World.add(world, this.body);
  
    }
    display()
    {
        var paperpos=this.body.position;		
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        //draw the ellipse here to display the rubber ball
        ellipse(0,0,this.r, this.r);
  
        pop()
    }
  
  }