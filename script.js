console.log("hi!");
var x = document.getElementById("myDIV");

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationend", myEndFunction); 