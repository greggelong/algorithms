let x; // turtle x
let instr;
let seconds = 2;
function setup() {
  createCanvas(800, 800);
  instr = genTernaryNoDq(20);
  print(instr);
  stroke(0,255,0);
  noFill();
  frameRate(7);
  strokeWeight(2)
  
}


function draw(){
  background(0);
  frameRate(7);
  turtle(instr[frameCount%instr.length])
  if (frameCount%instr.length === 0){
    background(0);
    frameRate(1);
    for(let i =0; i< instr.length;i++){
      turtle(instr[i]);
      
    }
  }
}


function genTernaryNoDq(n){
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
        
        let s2 = s1 //coppy the var
        let s3 = s1 
        //append 0 to s1
        q.push(s1+"0")
        q.push(s2+"1")
        q.push(s3+"2")
        n=n-1
        index+=1
    }
    return q
  
}


function turtle(inString){
  textSize(30);
  fill(0,255,0)
  text(inString,20,100)
  noFill();
  let instr = inString.split(""); // split
  let x = width/2;
  let y = height-height/3;
  let sz = 400;
  ellipse(x, y, sz,sz);
  for (let i =1; i<instr.length;i++){
    if(instr[i] == "1"){
      sz =sz/2
      x=x+sz
      ellipse(x, y, sz,sz);
    }
    else if (instr[i] == "0"){
      sz =sz/2
      x=x-sz
      ellipse(x, y, sz,sz);
    }
    else if (instr[i] == "2"){
      sz =sz/2
      y=y-sz
      ellipse(x, y, sz,sz);
    }
  }
  
  
  
  
}