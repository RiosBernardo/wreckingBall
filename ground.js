class Ground {
    constructor(){
        var options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(960, 790, 1920, 20, options)
        World.add (world, this.body)
    }

    display(){
        fill("black")

        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, 1920, 20)
    }
}