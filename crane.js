class Crane {
    constructor (bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 250, 
            stiffness: 1.2
          }
        
          this.pointB = pointB 
          this.body = Constraint.create(options)
          World.add (world, this.body)
    }

        display(){
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
}