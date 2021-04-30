class Rope {
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            stiffness:0.01,
            length:20,
            pointB:pointB
        }
        this.pointB=pointB
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
   
    attach(bodyA){
        this.rope.bodyA = bodyA;
    }
    fly(){
        this.rope.bodyA=null 
        }
    display(){
    if(this.rope.bodyA){
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    push();
    strokeWeight(3)
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
}
}