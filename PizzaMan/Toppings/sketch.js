var toppings = [];
var CurrentTopping;

function setup(){
  createCanvas(500,500);
  CurrentTopping = new Toppings;
}

function draw(){
  background("white");
  CurrentTopping.display();
  
  noStroke();
  fill('#ECDC98')
  triangle(20,30,0,40,20, 50);
  
  noStroke();
  fill("#E34234");
  ellipse(10,10,20,20)
  
  fill("#E9C2A6");
  ellipse(50,50,15,15)
  ellipse(60,50,15,15)
  ellipse(55,49,26,13)
  rect(49,50,12,15)
}
function Toppings(x,y){
  this.x = x;
  this.y = y;
  
this.display = function (){  //pepperoni
      noStroke();
      fill("#E34234");
      ellipse(x,y,20,20)
  }

this.display = function(){ //mushroom
    fill("#E9C2A6");
    ellipse(x+1,y+1,15,15)
    ellipse(x+11,y+1,15,15)
    ellipse(x+6,y,26,13)
    rect(x,y+1,12,15)
  }

this.display= function(){ //pineapple
      fill('#ECDC98')
      noStroke();
      triangle(x+20, y ,x, y+10, x+20, y+20);
  }    
}