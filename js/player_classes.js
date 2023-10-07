//This JS file will contain the class creation for the players.

class Player {
  //this is a class of Player. in here we add the properties that defines the player
  constructor(position = { x: 100, y: 100 }, color = "red") {
    //the constructor method sets the properties
    this.position = position;
    this.lastKey = null;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 30; //size of the player
    this.height = 30;

    this.color = color; //im adding different colors so you guys can know what square are you controlling
  }
  draw() {
    //in here I'm making like a square that will represent later the player
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    //altering the player/s properties
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    console.log(
      this.velocity.x,
      this.velocity.y,
      this.position.x,
      this.position.y
    );

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      //this is a condition so that the player can stay on the canvas w/o falling
      this.velocity.y += gravity; //so like an acceleration over time
    else this.velocity.y = 0;
  }
}
