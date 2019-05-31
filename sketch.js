let x = new Array;
let phase = new Array;
let phase2 = new Array;
let inc = 2*3.1428/19;
let inct = 2*3.1428/70;
let time=0;
let phaseDiff = 3.1428-1;

function setup(){
    background(0);
    createCanvas(1520,400);
    for(let i=0;i<76;i++){
        x[i]=10+i*20;
        phase[i] = i*inc;
        phase2[i] = phase[i]+phaseDiff;
    }

    


}

function draw(){
    fill(0);
    background(255);
    for(let j=0;j<76;j++){
        circle(x[j],200+50*(sin(phase[j]+time)+sin(phase2[j]-time)),10);
    }
    time+=inct;

}