// File is for the different types of enemies
/*for one of the enemies should i add a speed to it 
so that it goes back and forth?*/
class enemy{
    constructor (settings, color = 'white'){ /* x and y will be this enemies location.
     w and h is width and height. color is specific to this enemy which is white. */
        this.position = {x:settings.x, y:settings.y,}; //enemy's postion on canvas which is changed later
        this.w = 30; //enemy's width
        this.h = 30; //enemy's height
        this.color = color; //enemy's color
        this.velocity = {x:settings.velocityx || 2, y:0,}; // this is the intial velocity for enemy
    }
    draw() { //draws the enemy
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.w, this.h);
  }
    update() { //used to update postion of enemy based on the velocity 
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    // animate() {

    //     this.x += 1; // this moves the enemy to right but want it to move back and forth (?)
    // }
}
