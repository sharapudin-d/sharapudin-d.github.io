var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var posx = 101, posy = 101;
var t = 0;
ctx.beginPath();
ctx.arc(101, 101, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
function move(x,y){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(posx+x, posy+y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function Up(n,i){
  setTimeout(move,10,0,i);
  if(n>=0){
    setTimeout(Up,10,n-1,i-1);
    t++;
  }
  else{
    t=0;
  }
}
function Down(n,i){
  setTimeout(move,10,0,i);
  if(n>=0){
    setTimeout(Down,10,n-1,i+1);
    t++;
  }
  else{
    t=0;
  }
}
Down(100,0);
