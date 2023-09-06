var canvas;
let sign1= [];
let numsigns = 15;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function preload(){
   win = loadImage('windows.jpeg');
   caution = loadImage('caution.png');
}

function setup(){
     canvas = createCanvas(windowWidth, windowHeight);
     
    canvas.parent('canvas-wrapper');
    canvas.position(0,0);
    canvas.style('z-index', -1);

    


    for (let i=0; i<numsigns ; i++){
        sign1[i] = new Caution (random(width), random(height));
    }

    background(win);
}

function draw(){
   
    for (let i=0; i<numsigns; i++){
        sign1[i].body();
        sign1[i].move();
    }
}

class Caution{
    constructor (x,y){

        this.x = x;
        this.y = y;
    }

    body(){
        imageMode(CENTER);
        image(caution, this.x, this.y, 180, 160);
    }

    move(){
        
            this.y = this.y+3;
            
            if (this.y > height){
              this.y=0;
            }
          

            this.x = this.x+2;
            
            if (this.x > width){
              this.x=0;
            }
        } 

}


