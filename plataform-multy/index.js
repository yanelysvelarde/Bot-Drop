const canvas= document.querySelector('canvas')  
const c = canvas.getContext('2d')
console.log(c)

canvas.width= window.innerWidth         //sooo innerWidht is for it to be the whole widht of the canvas, we could have done this with css but lets not complicate things :'')
canvas.height= window.innerHeight       //same with the height 

class Player{      //this is a class of Player. in here we add the properties that defines the player
constructor(){      //the constructor method sets the properties
    this.position= {
        x: 100,
        y:100
    }
    this.width= 100
    this.height= 100
    

}
draw(){             //in here I'm making like a square that will represent later the player
c.fillRect(this.position.x,this.position.y, this.width, this.height)
}
}

const player = new Player()       //in here i want to implement the Player class
player.draw()