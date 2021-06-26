class Ground{
    constructor(x,y){
        var options={
             isStatic:true
        }
        this.body=Bodies.rectangle(x,y,1500,20,options)
        this.w=1500
        this.h=20
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER) 
        fill("brown")
        rect(pos.x,pos.y,this.w,this.h)

    }
}