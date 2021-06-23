class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 50,
            stiffness :0.02

        }

        this.bodyA = bodyA;
        this.pointB= pointB;
        this.slingshot = Constraint.create(options)
        World.add(world,this.slingshot);
        
        

    
    }
    shoot(){
        this.slingshot.bodyA = null;
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    
    
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(32,32,32);
            strokeWeight(8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }

    }
}

