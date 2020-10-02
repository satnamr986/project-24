class dustbin
{
    constructor(x,y)
    {
        
      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight = 100;
      this.wallThickness = 20;
      this.angle = 0;
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
      this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
      Matter.Body.setAngle(this.leftWallBody, this.angle);

      
      this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeightt/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
      Matter.Body.setAngle(this.rightWallBody, this.angle);
      World.add(world,this.bottomBody);    
      World.add(world,this.leftWallBody);    
      World.add(world,this.rightWallBody);      
    }
    display()
    {
        var posBottom = this.bottomBody.position;
        var posleft = this.leftWallody.position;
        var posBottom = this.leftWallBody.position;

        Push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        //strokeWeight(4);
        anleMode(RADIANS)
        Fill(225)
        stroke(225)
        DeviceRotationRate(this.angle)
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop()
        
        Push()
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        //strokeWeight(4);
        anleMode(RADIANS)
        Fill(225)
        stroke(225)
        DeviceRotationRate(this.angle)
        rect(0,0,this.dustbinWidth,this.wallThickness);
        pop()
    }
}