class Frame {
    constructor(position = { x: 0, y: canvas.height - 800 },color ='transparent',){      //the constructor method sets the properties
        this.position= position;
        this.velocity = {
            x: 0,
            y: 0,
          };   
 
        this.width = 512
        this.height = 800
        
        this.color = color  
        
    }
    draw(){                       //in here I'm making like a square that will represent later the player
        c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    
        }
        
        update() {
            
          this.draw();
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          console.log(
            this.velocity.x,
            this.velocity.y,
            this.position.x,
            this.position.y
          );
      
          if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            // This is a condition so that the player can stay on the canvas without falling
            const customGravity = 0.002; // Replace 0.5 with your desired gravity value
            this.velocity.y -= customGravity; // Acceleration over time using custom gravity
        } else {
            this.velocity.y = 0;
            
        }
      }}
    
    
    