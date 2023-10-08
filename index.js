//just in case, to see what's happenig just click on the index.html file directly from the file, not the compiler(not the thing you use to run code etc. visual studio code, jet brain, etc).
//also, it's important that you guys can see wassap cause you may need to click on "inspect element" to make changes on the code

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

console.log(c);

canvas.width = 512;
canvas.height = 2000;

//All constants to be used in the file.
const gravity = 0.5;
const player1 = new Player({ x: 200, y: 1970 }); //in here i want to implement the Player class
const player2 = new Player({ x: 150, y: 1970 }, "blue"); //you can change the position on the x-axis for it to be closer to player1 or not

const platforms = [];
const platform1 = new Platform();

const platform2 = new Platform({ x: 150, y: 1700 }, "yellow");
const platform3 = new Platform({ x: 375, y: 1700 });
const platform4 = new Platform({ x: 250, y: 1600 });
const platform5 = new Platform({ x: 0, y: 1600 });
const platform6 = new Platform({ x: -50, y: 1500 });
const platform7 = new Platform({ x: -50, y: 1400 });
const platform8 = new Platform({ x: -50, y: 1300 });
const platform9 = new Platform({ x: 200, y: 1200 });
const platform10 = new Platform({ x: 400, y: 1100 });
const platform11 = new Platform({ x: 480, y: 1000 });
const platform12 = new Platform({ x: 480, y: 900 });
const platform13 = new Platform({ x: 460, y: 800 });
const platform14 = new Platform({ x: 430, y: 700 });
const platform15 = new Platform({ x: 200, y: 600 });
const platform16 = new Platform({ x: -20, y: 500 });
const platform17 = new Platform({ x: 0, y: 400 });
const platform18 = new Platform({ x: 220, y: 300 });
const platform19 = new Platform({ x: 400, y: 200 });
const platform20 = new Platform({ x: 300, y: 100 });
const platform21 = new Platform({ x: 208, y: 0 });

const framePrincipal = new Frame();

platforms.push(platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10, platform11
  ,platform12, platform13, platform14, platform15, platform16, platform17, platform18, platform19, platform20,platform21);

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  arrowLeft: {
    pressed: false,
  },
  arrowRight: {
    pressed: false,
  },
};
//=============================================================

//The follow code will be an experiment to fix the collision issue for all the platforms

for (let i = 0; i <= 20; i++) {
  const newPlatform = new Platform();
  platforms.push(newPlatform); // Add the new platform to the platforms array
}



function intersects(obj1, obj2) {
  //logic that will be implemented in animate
  return (
    obj1.position.x < obj2.position.x + obj2.width &&
    obj1.position.x + obj1.width > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.height &&
    obj1.position.y + obj1.height > obj2.position.y
  );
}
//=============================================================
//ANIMATE Function

function animate() {
  const cameraX = 0;
  const cameraY = framePrincipal.position.y - canvas.height / 2;
  c.save();
  c.translate(-cameraX, -cameraY);

  if (
    !intersects(player1, framePrincipal) &&
    !intersects(player2, framePrincipal)
  ) {
    // Restart the game by resetting player positions and other necessary variables
    player1.position.x = 200;
    player1.position.y = 1600;
    player2.position.x = 150;
    player2.position.y = 1600;
    // You can reset other game state variables here
  }

  //The following code is used for the controls of the players.

  //I removed the platform moving along with the keys being pressed and
  //stored them in a text file "Throwaway_code_from_index"

  // For player1 j
  if (keys.d.pressed) {
    player1.velocity.x = 5;
  } else if (keys.a.pressed) {
    player1.velocity.x = -5;
  } else {
    player1.velocity.x = 0;
  }

  // For player2
  if (keys.arrowRight.pressed) {
    player2.velocity.x = 5;
  } else if (keys.arrowLeft.pressed) {
    player2.velocity.x = -5;
  } else {
    player2.velocity.x = 0;
  }

  //======================================================
  //The following disgusting line of if statements are going to all account for the collisions for the platforms
  //This is going to be disgustingly long but bear with me, guys. The platform code HAS to go inside the
  //Animate() loop function here to account for the collisions.

  //So far, these collisions are only for the top and bottom of the platforms.
  //PLAYER 1 PLATFORM COLLISIONS
  for (const currentPlatform of platforms) {
    if (
      player1.position.y + player1.height <= currentPlatform.position.y &&
      player1.position.y + player1.height + player1.velocity.y >=
        currentPlatform.position.y &&
      player1.position.x + player1.width >= currentPlatform.position.x &&
      player1.position.x <= currentPlatform.position.x + currentPlatform.width
    ) {
      player1.velocity.y = 0;
    } else if (
      player1.position.y + player1.height >=
        currentPlatform.position.y + 6 * currentPlatform.height &&
      player1.position.y + player1.height + player1.velocity.y <=
        currentPlatform.position.y + 6 * currentPlatform.height &&
      player1.position.x + player1.width >= currentPlatform.position.x &&
      player1.position.x <= currentPlatform.position.x + currentPlatform.width
    ) {
      player1.velocity.y = 0;
    }

    // Repeat the same collision checks for player2 if needed
    if (
      player2.position.y + player2.height <= currentPlatform.position.y &&
      player2.position.y + player2.height + player2.velocity.y >=
        currentPlatform.position.y &&
      player2.position.x + player2.width >= currentPlatform.position.x &&
      player2.position.x <= currentPlatform.position.x + currentPlatform.width
    ) {
      player2.velocity.y = 0;
    } else if (
      player2.position.y + player2.height >=
        currentPlatform.position.y + 6 * currentPlatform.height &&
      player2.position.y + player2.height + player2.velocity.y <=
        currentPlatform.position.y + 6 * currentPlatform.height &&
      player2.position.x + player2.width >= currentPlatform.position.x &&
      player2.position.x <= currentPlatform.position.x + currentPlatform.width
    ) {
      player2.velocity.y = 0;
    }
  }

  //==================================================
  c.clearRect(0, 0, canvas.width, canvas.height); //clears canvas

  framePrincipal.update();
  player1.update();
  player2.update();

  for (const currentPlatform of platforms) {
    currentPlatform.draw();
  }

  c.restore();

  requestAnimationFrame(animate);
}
//=======================================================

animate();

//=============================================================

addEventListener("keydown", ({ keyCode }) => {
  //this is understandable somehow if you click in inspect element
  console.log(keyCode);

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

    //player2

    case 37:
      console.log("left");
      keys.arrowLeft.pressed = true;
      player2.lastKey = keyCode;
      break;
    case 39:
      console.log("right");
      keys.arrowRight.pressed = true;
      player2.lastKey = keyCode;
      break;

    case 40:
      console.log("down");
      break;

    case 38:
      console.log("up");
      player2.velocity.y -= 12;
      break;
  }
});

//=============================================================

addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    //player1
    case 65:
      console.log("left");
      keys.a.pressed = false;
      break;
    case 68:
      console.log("right");
      keys.d.pressed = false;
      break;
    case 83:
      console.log("down");
      break;

    //player2
    case 37:
      console.log("left");
      keys.arrowLeft.pressed = false;
      break;
    case 39:
      console.log("right");
      keys.arrowRight.pressed = false;
      break;
    case 40:
      console.log("down");
      break;
  }
});
