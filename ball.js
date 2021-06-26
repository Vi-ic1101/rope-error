class Ball{
    constructor(x,y,w,h,angle){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipseMode(CENTER)
        fill("red")
        ellipse(0,0,this.w,this.h)
        pop()
    }
}