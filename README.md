
#![Ilustración_sin_título](https://github.com/yanelysvelarde/Bot-Drop/assets/95549729/89c0b0fa-dd6f-403d-a903-337d464f99b4)
# 
**Bot & Drop** In a post-apocalyptic world where the presence of life has faded into myth, two robots, Bot & Drop, exist in the desolation. They have heard data of a legendary plant located at the highest peak. This mystical plant requires the rarest of resources - pure water. 


## Bot & Drop
#Developers' note
We are excited to share the incredible journey our beginner team embarked on during this hackathon. Despite our limited experience, we had a blast, learned a lot, and created a project entirely from scratch.

Time spent: **24** hours spent in total
 

## Built With
<p align="left">
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
</p>

## Milestone
1. Our project started with a game concept and design phase. We wanted to make a game where two people could play on the same keyboard to climb platforms without falling.
2. Our project utilized HTML and CSS for the game's presentation. We designed a simple but effective user interface, with a canvas element to render the game world.
3. The heart of our project lay in JavaScript programming. We wrote several scripts to implement game mechanics, character movement, collision detection, and platform generation. Key game elements included gravity, player control, and platform interactions. We also utilized object-oriented programming principles to create classes for players and platforms, making our code modular and organized. This are a few examples:

Part of a code that handles keyboard input for controlling a player character in a game.
  ```
switch (keyCode) {
    //player1
    case 65:
      console.log("left"); //just in case, console.log() is to print
      keys.a.pressed = true;
      player1.lastKey = keyCode;
      break;

    case 68:
      console.log("right");
      keys.d.pressed = true;
      player1.lastKey = keyCode;
      break;

    case 83:
      console.log("down");
      break;

    case 87:
      console.log("up");
      player1.velocity.y -= 12; //idk why im substracting instead of add but it works somehow
      break;
```
Part of code is involved in managing the camera's position, saving the canvas state, and repositioning players under specific conditions the game
```
 const cameraX = 0;
  const cameraY = framePrincipal.position.y - canvas.height / 2;
  c.save();
  c.translate(-cameraX, -cameraY);


  if (!intersects(player1, framePrincipal) && !intersects(player2, framePrincipal)) {
    
    player1.position.x = 200;
    player1.position.y = 1600;
    player2.position.x = 150;
    player2.position.y = 1600;
    
  }
```
4. Player control was a crucial aspect of our project. We implemented controls for two robots, Bot & Drop, allowing them to move left and right and jump. The arrow keys and 'W', 'A', 'S', 'D' keys were used for control. Gravity and collision detection ensured that the characters interacted realistically with the platforms in the game.
5. 

## Our beloved robots

<div style="display: flex; justify-content: space-between;">
    <div style="text-align: center;">
        <img src="https://github.com/yanelysvelarde/Bot-Drop/assets/95549729/360bc60f-e5c2-48f3-ac09-70e7e18fef53" alt="still1" width="45%" />
        <em>Drop</em>
    </div>
    <div style="text-align: center;">
        <img src="https://github.com/yanelysvelarde/Bot-Drop/assets/95549729/f8ed80be-5ab5-4749-89b7-5143864d9f23" alt="still2" width="45%" />
        <em>Bot</em>
    </div>
</div>


  

##

 
