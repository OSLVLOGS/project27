class bob{

    constructor(x, y){
        
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bob.png");

        var options={

         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2

        }

     }

     display() {

        super.display(); 

      }


}