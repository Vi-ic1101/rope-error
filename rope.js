class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB
        this.Constraint=Constraint.create(options)
        World.add(world,this.Constraint)

    }
    fly(){
        this.Constraint.bodyA=null
    }
    attach(body){
        this.Constraint.bodyA=body
    }
    display(){
        if(this.Constraint.bodyA){
            var pointA=this.Constraint.bodyA.position
            var pointB=this.pointB

            push()
            stroke("white")
            strokeWeight(130)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
        }
    }

}