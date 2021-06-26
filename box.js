class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        
        this.w=70
        this.h=70
        this.body=Bodies.rectangle(x,y,70,70,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
       
        rectMode(CENTER)
        stroke("green")
        strokeWeight(12)
        fill("silver")
        rect(0,0,this.w,this.h)
        pop()
    }
}