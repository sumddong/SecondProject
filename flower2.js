var x =100,
  y = 100,
  angle1 = 0.0,
  segLength = 40;


function setup() {
  createCanvas(800,700);
  //strokeWeight(10.0);
 // stroke(255,237,125);
  background(0);
  drawLeaf();
}

function draw() {
  


  r=random(255);
  g=random(255);
  b=random(255);
 
   //background(0);

  background(0);
  drawLeaf();
strokeWeight(10.0);
  stroke(255,237,125);  
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
  
  
 //quad(400,350,750,550,750,600,400,400);
  //quad(700,550,750,550,750,100,700,100);
  
  if(mouseButton==LEFT){
    fill(0);
    stroke(0);
    ellipse(440,380,100,100);
  ellipse(720,100,100,100);

    drawLight();
    drawLight3();
    
  }
  
  if(mouseButton==RIGHT){
    
    drawSnow();
    drawLeaf2();
   
  }
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function drawLight(){
  translate(width/2,400);
  noStroke();
  fill(255,0,0);
  
 for (var i = 0; i < 10; i ++) {
    ellipse(0, 80, 20, 80);
    rotate(PI/3);
     
  }
  
}

function drawLight5(){
  translate(width/2,400);
  noStroke();
  fill(r,g,b);
  
 for (var i = 0; i < 10; i ++) {
    ellipse(0, 80, 20, 80);
    rotate(PI/3);
     
  }
  
}



function drawLight2(){
  translate(width/2-400,400);
  noStroke();
  fill(r,g,b);
 for (var i = 0; i < 10; i ++) {
    ellipse(0, 80, 20, 80);
    rotate(PI/5);
  }
  
}

function drawLight3(){
  translate(width/2-300,400);
  noStroke();
  fill(250,244,190);
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 80, 40, 70);
    rotate(PI/5);
   
  }
 
}

function drawLight6(){
  translate(width/2-300,400);
  noStroke();
  fill(r,g,b);
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 80, 40, 70);
    rotate(PI/5);
   
  }
 
}

function drawLeaf(){
  stroke(102,75,0);
  fill(102,75,0);
  quad(440,390,800,550,800,650,440,400);
  quad(700,550,740,550,710,100,700,100);
 // ellipse(440,380,100,100);
 // ellipse(720,100,100,100);
}

function drawLeaf2(){
  stroke(r,g,b);
  fill(r,g,b);
  quad(440,390,800,550,800,650,440,400);
  quad(700,550,740,550,710,100,700,100);
  fill(0);
  stroke(0);
 ellipse(440,380,100,100);
  ellipse(720,100,100,100);
}

function drawSnow(){
  fill(255);
  stroke(5);
  rect(0,600,800,100);
  
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(400,600,80,10);
  ellipse(450,650,80,10);
  ellipse(470,630,80,10);
  fill(250,244,190);
  stroke(250,244,190);
  ellipse(600,600,70,30);
  ellipse(550,640,70,30);
  ellipse(650,650,70,30);
  
  
}
