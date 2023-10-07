class Platform{
    constructor(position={x:100,y:100},color ='red'){      //the constructor method sets the properties
        this.position= position;
        this.lastKey = null;
    
        this.width = 300
        this.height = 10

        this.color = color
    }
    draw(){             //in here I'm making like a square that will represent later the player
        c.fillStyle=this.color
            c.fillRect(this.position.x,this.position.y, this.width, this.height)
        }
    }

    