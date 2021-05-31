class Snow{
    constructor(x,y,r) {
        var options = {
           // isStatic:false,
            'restitution':0.8
            //'friction':1.0,
            //'density':1.0
        }
    this.r=r;
   // this.x=x;
    //this.y=y;
    this.image=loadImage("snow5.webp")
    this.body= Bodies.circle(x,y,this.r,options);
    //this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world , this.body);


}
display(){
    var pos = this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    noStroke();
    //fill("red");
    //ellipseMode(RADIUS);
   // ellipse(0,0,this.r,this.r);
   //this.body.debug=true;
    image(this.image,0,0,this.r,this.r)
    pop();

}
    }