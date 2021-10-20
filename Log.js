class Log{
    constructor(x, y,height,angle){
        var options = {
            friction: 1,
            restitution: 0.5,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,10,height,options);
        this.width = 10;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("#80604D");
        strokeWeight(3);
        stroke("#654321");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
