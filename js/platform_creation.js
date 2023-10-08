class Platform {
  constructor(position = { x: 0, y: 1900 }, color = "green") {
    //the constructor method sets the properties
    this.position = position;
    this.lastKey = null;

    this.width = 100;
    this.height = 5;

    this.color = color;
  }
  draw() {
    //in here I'm making like a square that will represent later the player
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

}
