class Monster {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.image = loadImage("Monster-01.png")
      this.body = Bodies.circle(x,y,r,options);
     
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      
      image(this.image,pos.x, pos.y, this.radius*2, this.radius*2);
    }
  }