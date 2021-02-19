
//y1 = Acos(wt-kx)
//y2 = Acos(wt+kx)

//合成波： y= y1 + y2 = 2Acos(kx)cos(wt)

let points = new Array();
let t = 1;
let inct = Math.PI/130;
let len;
let addButton;

function setup(){
    background(0);
    createCanvas(1500,400);
    len = 500;
    addButton = createButton('增加');
    addButton.position(3*windowWidth/4,windowHeight/4);
    addButton.mousePressed(add);
    for(let i=0;i<windowWidth;i++){
        points.push({
            x:i,
            // y:200+100*Math.sin(i*(Math.PI/400)) //200是偏移,100是放大倍数
            y:200+f(25,Math.PI,t,(Math.PI/13),i)
        });
    }
}

function draw(){
    t += inct;
    background(255);
    // background(255,240,245);
    for(let k=0;k<len;k++){
        points[k].y = 200+f(25,Math.PI,t,(Math.PI/13),k) //纵坐标随t在变化
        if(k!=0){
            stroke(226, 204, 0);//线条的颜色
            line(points[k-1].x,points[k-1].y,points[k].x,points[k].y)     
        }
    }
}

function add() {
    if(len+100<windowWidth){
        len+=100;
    }
    else{
        len = windowWidth;
    }
    redraw();
}
  


//驻波公式
function f(A,w,t,k,x){
    //25,PI,t,PI/13
    return 2*A*Math.cos(w*t)*Math.cos(k*x)
}

