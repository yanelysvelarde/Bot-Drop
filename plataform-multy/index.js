const canvas= document.querySelector('canvas')  
const c = canvas.getContext('2d')
console.log(c)

canvas.width= window.innerWidth         //sooo innerWidht is for it to be the whole widht of the canvas, we could have done this with css but lets not complicate things :'')
canvas.height= window.innerHeight       //same with the height 



const gravity= .5

class Player{      //this is a class of Player. in here we add the properties that defines the player
constructor(){      //the constructor method sets the properties
    this.position= {
        x: 100,
        y:100
    }

    this.velocity= {
        x: 0,
        y:0
    }


    this.width= 30          //size of the player
    this.height= 30
    

}
draw(){             //in here I'm making like a square that will represent later the player
c.fillRect(this.position.x,this.position.y, this.width, this.height)
}

update(){   //altering the player/s properties
this.draw()
this.position.y += this.velocity.y


if(this.position.y + this.height + this.velocity.y <=canvas.height)     //this is a condition so that the player can stay on the canvas w/o falling
this.velocity.y += gravity  //so like an acceleration over time
else this.velocity.y = 0

}

}

const player = new Player()       //in here i want to implement the Player class


function animate(){
requestAnimationFrame(animate)   //requestAnimationFrame acts like loop...kinda, so it's calling animate an infinity number of times 
c.clearRect(0,0,canvas.width,canvas.height)           //clears canvas 
player.update()
}
animate()