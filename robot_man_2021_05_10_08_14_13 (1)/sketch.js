function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250,100,100,9);
 
  fill(0)
  arc(width/2, 2 * height /3,200,160,0,PI);
  rect(50, 50, 300, 200);
    fill(100) 
  
  push()
  translate(-60,0)
  ellipse(width/2,120,75,75)
  pop()
  push()
  translate(60,0)
  ellipse(width/2,120,75,75)
  pop()
  
  push()
  fill(250,100,10)
  triangle(159, 180, 200, 231, 243, 182);
  pop()
  
   push()
  let mouseEye= map(mouseX,0,width,-20,20,1);
  
  fill(250,50,10)
  translate(-60 + mouseEye,0)
  ellipse(width/2,120,40,40)
  pop()
  
  push()
  fill(250,50,10)
  translate(60 + mouseEye,0)
  ellipse(width/2,120,40,40)
  pop()
  
  push()
   rect(17, 80, 34, 170);
   rect(351, 80, 34, 170);
  pop()
  console.log(mouseX +","+mouseY);
}