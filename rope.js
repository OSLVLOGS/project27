class Chain{
 constructor(bodyA, bodyB, offsetX, offsetY){

   this.offsetX = offsetX
   this.offsetY = offsetY

   var options={
       bodyA:body1,
       bodyB:body2,
       pointB:{x:this.offsetX, y:this.offsetY}
   }

   this.Chain = Constriant.create(options)
   World.add(world,this.Chain)

 }


display(){
    
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

}
}   