class Platform{
    constructor(){
        this.position= {
            x:200,
            y:100
        }
        this.width = 300
        this.height = 10
    }
    draw() {        //context: fillRect creates the rectangle
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    }
    