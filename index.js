//just in case, to see what's happenig just click on the index.html file directly from the file, not the compiler(not the thing you use to run code etc. visual studio code, jet brain, etc).
//also, it's important that you guys can see wassap cause you may need to click on "inspect element" to make changes on the code


const canvas= document.querySelector('canvas')  
const c = canvas.getContext('2d')


console.log(c)


canvas.width = 512
canvas.height = 2000





const gravity= .7

class Player{      //this is a class of Player. in here we add the properties that defines the player
constructor(position={x:400,y:100},color ='red'){      //the constructor method sets the properties
    this.position= position;
    this.lastKey = null;

    this.velocity= {
        x: 0,
        y:0
    }


    this.width= 30          //size of the player
    this.height= 30
    

    this.color= color       //im adding different colors so you guys can know what square are you controlling

}
draw(){             //in here I'm making like a square that will represent later the player
c.fillStyle=this.color
    c.fillRect(this.position.x,this.position.y, this.width, this.height)
}

update(){   //altering the player/s properties
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y



if(this.position.y + this.height + this.velocity.y <=canvas.height)     //this is a condition so that the player can stay on the canvas w/o falling
this.velocity.y += gravity  //so like an acceleration over time
else this.velocity.y = 0

}

}

class Platform{
constructor(){
    this.position= {
        x:200,
        y:100
    }
    this.width = 200
    this.height = 20
}
draw() {        //context: fillRect creates the rectangle
    c.fillStyle = 'purple'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
}
}







const player1 = new Player()       //in here i want to implement the Player class
const player2 = new Player({ x:450,y: 100},'blue') //you can change the position on the x-axis for it to be closer to player1 or not
const platform = new Platform()

const keys = {
a: {
    pressed: false 
}, 
d: {
    pressed: false 
},
arrowLeft: {
    pressed: false 
}, 
arrowRight: {
    pressed: false 
}
//hi    
}




function animate(){
requestAnimationFrame(animate)   //requestAnimationFrame acts like loop...kinda, so it's calling animate an infinity number of times 

c.clearRect(0,0,canvas.width,canvas.height)           //clears canvas 

player1.update()
player2.update()
platform.draw()


  
   

// For player1 j
if (keys.d.pressed) {        //where the problem lies
    player1.velocity.x = 5;
} else if (keys.a.pressed) {
    player1.velocity.x = -5;
} else {
    player1.velocity.x = 0;

if(keys.d.pressed){
platform.position.x -= 5
}else if (keys.a.pressed){
    platform.position.x += 5
}

}

// For player2
if (keys.arrowRight.pressed) {       
    player2.velocity.x = 5;
} else if (keys.arrowLeft.pressed) {
    player2.velocity.x = -5;
} else {
    player2.velocity.x = 0;

    if(keys.arrowRight.pressed){
        platform.position.x -= 5
        }else if (keys.arrowLeft.pressed){
            platform.position.x += 5
}
}













//collision with the plataform

if(player1.position.y + player1.height <=       //collision detection on the y-axis
    platform.position.y  && 
    player1.position.y + player1.height+ player1.velocity.y >=
    platform.position.y         && player1.position.x    + player1.width >= platform.position.x
    && player1.position.x <= platform.position.x +platform.width
    ){   //x-axis
player1.velocity.y = 0
}
if(player2.position.y + player2.height <=      
    platform.position.y  && 
    player2.position.y + player2.height+ player2.velocity.y >=
    platform.position.y         && player2.position.x   + player2.width >= platform.position.x
    && player2.position.x <= platform.position.x +platform.width)      {
player2.velocity.y = 0
}
}
animate()





addEventListener('keydown',({ keyCode }) => {  //this is understandable somehow if you click in inspect element
console.log(keyCode)
switch (keyCode){
    //player1
    case 65:
        console.log('left')  //just in case, console.log() is to print
        keys.a.pressed = true
        player1.lastKey=keyCode
        break

        case 68:
            console.log('right')
           keys.d.pressed = true
           player1.lastKey=keyCode
            break


        case 83:
            console.log('down')
            break

     case 87:
     console.log('up')
     player1.velocity.y -=12       //idk why im substracting instead of add but it works somehow
        break


//player2

case 37:
            console.log('left')  
        keys.arrowLeft.pressed = true
        player2.lastKey=keyCode
            break
        case 39:
            console.log('right')
            keys.arrowRight.pressed = true
            player2.lastKey=keyCode
            break


        case 40:
            console.log('down')
            break

     case 38:
     console.log('up')
     player2.velocity.y -=12
        break



}

})




addEventListener('keyup',({ keyCode }) => {  
    console.log(keyCode)
    switch (keyCode){
        //player1
        case 65:
            console.log('left')  
            keys.a.pressed = false
            break
    
            case 68:
                console.log('right')
                keys.d.pressed = false
                break
    
    
            case 83:
                console.log('down')
                break
    
         case 87:
         console.log('up')
         player1.velocity.y -=12
            break
    
    
    //player2
    
    case 37:
    console.log('left')  
    keys.arrowLeft.pressed = false
    break
            case 39:
                console.log('right')
                keys.arrowRight.pressed = false
                break
    
    
            case 40:
                console.log('down')
                break
    
         case 38:
         console.log('up')
         player2.velocity.y -=12
            break
    
    
    
    }
 
    })