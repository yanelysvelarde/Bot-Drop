// File is for the different types of enemies
/*for one of the enemies should i add a speed to it 
so that it goes back and forth?*/
class enemy_type_1{
    constructor (x, y, w, h, color = 'white'){ /* x and y will be this enemies location.
     w and h is width and height. color is specific to this enemy which is white.
     these are set as their own variables so that they can be changed later. */
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    renderEnemy(){ //renders the enemy on canvas
       //not sure how to do this yet??
    }
    animate() {
        //??
        this.x += 1; // this moves the enemy to right but want it to move back and forth (?)
    }


    }
    