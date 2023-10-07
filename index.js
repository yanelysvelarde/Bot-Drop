//just in case, to see what's happenig just click on the index.html file directly from the file, not the compiler(not the thing you use to run code etc. visual studio code, jet brain, etc).
//also, it's important that you guys can see wassap cause you may need to click on "inspect element" to make changes on the code


const canvas= document.querySelector('canvas')  
const c = canvas.getContext('2d')


console.log(c)


canvas.width = 512
canvas.height = 2000



//All constants to be used in the file.
const gravity= .7
const player1 = new Player()       //in here i want to implement the Player class
const player2 = new Player({ x:150,y: 100},'blue') //you can change the position on the x-axis for it to be closer to player1 or not
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
}






//=============================================================
//ANIMATE Function

function animate(){
requestAnimationFrame(animate)   //requestAnimationFrame acts like loop...
//kinda, so it's calling animate an infinity number of times 

c.clearRect(0,0,canvas.width,canvas.height)           //clears canvas 

player1.update()
player2.update()
platform.draw()

//=======================================================
  





   // The following code is going to be for collisions. The collisions is going to deal with
//how the players are going to interact with the platforms.

//The execution of the code below the if statements will change the velocity of the players to 0
//So they don't appear falling down THROUGH the platforms.



//Player 1's Collision 
if(player1.position.y + player1.height <=       //collision detection on the y-axis
platform.position.y  && 
player1.position.y + player1.height+ player1.velocity.y >=
platform.position.y         && player1.position.x    + player1.width >= platform.position.x
&& player1.position.x <= platform.position.x +platform.width
){   //x-axis
player1.velocity.y = 0 //Stops the players from moving after standing on top of platform.
}
//The else if statements are going to be used for the players phasing UP through the platforms.



//Player 2's Collision

if(player2.position.y + player2.height <=      
platform.position.y  && 
player2.position.y + player2.height+ player2.velocity.y >=
platform.position.y         && player2.position.x   + player2.width >= platform.position.x
&& player2.position.x <= platform.position.x +platform.width)      {
player2.velocity.y = 0
}
}
animate()
//===============================



//The following code is used for the controls of the players.

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

//==================================





// The following code is going to be for collisions. The collisions is going to deal with
//how the players are going to interact with the platforms.

//The execution of the code below the if statements will change the velocity of the players to 0
//So they don't appear falling down THROUGH the platforms.



//Player 1's Collision 
if(player1.position.y + player1.height <=       //collision detection on the y-axis
    platform.position.y  && 
    player1.position.y + player1.height+ player1.velocity.y >=
    platform.position.y         && player1.position.x    + player1.width >= platform.position.x
    && player1.position.x <= platform.position.x +platform.width
    ){   //x-axis
player1.velocity.y = 0 //Stops the players from moving after standing on top of platform.
    }


//The else if statements are going to be used for the players phasing UP through the platforms.



//Player 2's Collision

if(player2.position.y + player2.height <=      
    platform.position.y  && 
    player2.position.y + player2.height+ player2.velocity.y >=
    platform.position.y         && player2.position.x   + player2.width >= platform.position.x
    && player2.position.x <= platform.position.x +platform.width)      {
player2.velocity.y = 0
}

animate()



//=============================================================



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



//=============================================================


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