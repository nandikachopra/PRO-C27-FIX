class Rope{
    constructor(body1,body2)
    {
        /*this.offsetX=offsetX
        this.offsetY=offsetY*/
        var options = {
            bodyA: body1,
            bodyB: body2
        }
        
        //console.log(options);
        this.r=Constraint.create(options);
        World.add(world,this.r);
    }
    display(){
      var pointA=this.r.bodyA.position;
	  var pointB=this.r.bodyB.position;

	  strokeWeight(2);
	 
	  line(pointA.x,pointA.y,pointB.x,pointB.y);
	}
 }