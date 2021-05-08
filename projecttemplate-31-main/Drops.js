class Drops{
    constructor(x,y){
       
        var options = {
       'friction':0.1
                   }
        this.body = Bodies.circle(x, y,10 , 10, options);
        World.add(world, this.body);
    }
    update(){
        
    }
}