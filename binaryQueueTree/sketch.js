let x; // turtle x
let binaryInstr;
let turn = 60; // start with 60 deg turn
function setup() {
  createCanvas(800, 800);
  background(0);
  binaryInstr = genBinaryNoDq(25);
  print(binaryInstr);
  //stroke(0,255,0);
  noFill();
  angleMode(DEGREES);
  frameRate(7);
  
}


function draw(){
  background(0,40)
  if (frameCount%binaryInstr.length===0){
    background(0);
    for(let i =0; i<binaryInstr.length;i++){
      turtle(binaryInstr[i],color(255,0,0))
    }
    turn = random(12,120)

  } 
  turtle(binaryInstr[frameCount%binaryInstr.length], color(0,255,0))
}


function genBinaryNoDq(n){
    // queue of empty strings
    let q = []
    // push the first to the end of the queue and the first
    q.push("1")
    let index = 0
    while (n>0){
        //get the front of the queue
        let s1 = q[index]
        //dont pop it off
        //q.unshift()
        print(s1)
        
        let s2 = s1 //copy the var
        //append 0 to s1
        q.push(s1+"0")
        q.push(s2+"1")
        n=n-1
        index+=1
    }
    return q
  
}


function turtle(inString, clr){
  fill(0);
  stroke(clr)
  strokeWeight(1)
  rect(10,70,150,50)
  textSize(30)
  fill(0,255,0)
  text(inString,20,100)
  noFill();
  ///let turn = 30; make global
  let ang =90;
  let instr = inString.split(""); // split
  let sz = 300;
  let x = width/2;
  let y = height
  let x1 = x
  let y1 = y -sz;
  strokeWeight(sz/5)
  line(x, y, x1,y1);
  x=x1
  y=y1
  for (let i =1; i<instr.length;i++){
    if(instr[i] == "1"){
      // turn left
      ang -= turn;
    }
    else if (instr[i] == "0"){
      // turn right
      ang += turn;   
    }
    // move forward/
    sz =sz*0.61
    x1= x+sz*cos(ang)  // x1 = x + amount * cos (theta)
    y1 = y-sz*sin(ang)  // y1 =y + amount * sin (theta)
    strokeWeight(sz/5)
    line(x, y, x1,y1);
    x=x1
    y=y1
  }
  
}