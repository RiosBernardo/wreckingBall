class Ball {
    constructor (x, y){
        var options = {
            density: 1,
            frictionAir: 0.005
        }

        this.body = Bodies.circle(x, y, 50, options)
        World.add (world, this.body)
    }
    
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        ellipseMode (RADIUS)
        ellipse(0, 0, 50, 50)
        pop()           
    }
}
    