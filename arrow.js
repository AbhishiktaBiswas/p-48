class arrow extends BaseClass{
    constructor(x,y){
      super(x,y);
      this.image = loadImage("sprites/arrow.png");
      image(this.image,x,y,width,height);
      
    }
  }