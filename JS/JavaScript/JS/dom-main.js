var element;
//document.getElementById("header").onclick = abc;
//document.getElementById("header").onmouseenter = abc;
document.getElementById("header").addEventListener("mouseenter",abc);
document.getElementById("header").addEventListener("click", function(){
	this.style.border = "10px solid red";
});

function abc(){
	document.getElementById("header").style.background = "green";
}
//element = document.querySelector("header").classList;
//console.log(element);