
// var box1=document.getElementById('button-div1')
// var box2=document.getElementById('outer-box')
// document.addEventListener('click',function(){
//     box2.style.backgroundColor='green',"#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","purple";
// })
// var box3=document.getElementById('button-div2');
// var box4=document.getElementsByClassName('inner-box');
//  document.addEventListener('click',function(){
//     box4.getElementsByClassName('.triangle-bottomleft')
    
//  })
var index = 0;
var isTriangle = false;
var color = ["#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","purple"];
var chShape = document.getElementById("button-div2");
var chColor = document.getElementById("button-div1");


chShape.addEventListener("click",changeShape);
chColor.addEventListener("click",changeColor);

function changeColor()
{
    document.getElementById("outer-box").style.backgroundColor=color[index++];
    if(index == 7)
      index = 0;


}
function changeShape()
{
  if(!isTriangle)
  {
    var i = document.getElementsByClassName("inner-box")[0];
    i.className = "triangle-bottomleft";
    isTriangle = true;
  }
  else
  {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner-box";
    isTriangle = false;
  }
}