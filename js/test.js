//Code to activate the side nav bar
$(document).ready(function(){ $(".button-collapse").sideNav(); });

//Code to activate the parallax
$(document).ready(function(){
     $('.parallax').parallax();
   });
   
//My variables
var x = 20;
var y = 15;

//My objects
var obj = {
  a:"Hello World",
  b:250,
  c:true
};

var Myself = {
  name:"Mike"
};

//creating an array
var arr = [
  "Hello World",
  250,
  true
];

//function definitons
function add(){
  var z=x+y;
  document.write(z + "<br />");
};

function printArr(e){
  document.write(e[0] + "<br />");
  document.write(e[1]+ "<br />");
  document.write(e[2] + "<br />");
};

function identify(){
  return this.name.toUpperCase();
}

function speak(){
  var output = "Hello my name is: " + identify.call(this);
  console.log(output);
}

function changeBGColor(){
  document.querySelector(".Example").style.backgroundColor = "red";
}

function changeFColor(){
  document.querySelector(".Example").style.color = "blue";
}

//function calls
add();
printArr(arr)

//identify.call(Myself);
speak.call(Myself);
