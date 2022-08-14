let x; // turtle x
let binaryInstr;
let seconds = 2;
function setup() {
  createCanvas(600, 600);
  binaryInstr = genBinaryNoDq(20);
  print(binaryInstr);
  stroke(0,255,0);
  noFill();
  frameRate(7);
  strokeWeight(2)
  
}


function draw(){
  background(0);
  frameRate(7);
  oneDTurtle(binaryInstr[frameCount%binaryInstr.length])
  if (frameCount%binaryInstr.length === 0){
    background(0);
    print("bing")
    frameRate(1);
    for(let i =0; i< binaryInstr.length;i++){
      oneDTurtle(binaryInstr[i]);
      
    }
  }
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
        
        let s2 = s1 //coppy the var
        //append 0 to s1
        q.push(s1+"0")
        q.push(s2+"1")
        n=n-1
        index+=1
    }
    return q
  
}


function oneDTurtle(inString){
  textSize(30);
  fill(0,255,0)
  text(inString,20,100)
  noFill();
  let instr = inString.split(""); // split
  let x = width/2;
  let sz = 300;
  ellipse(x, 300, sz,sz);
  for (let i =1; i<instr.length;i++){
    if(instr[i] == "1"){
      sz =sz/2
      x=x+sz
      ellipse(x, 300, sz,sz);
    }
    else if (instr[i] == "0"){
      sz =sz/2
      x=x-sz
      ellipse(x, 300, sz,sz);
    }
    
  }
  
  
  
  
}