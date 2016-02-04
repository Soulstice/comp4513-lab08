/* code goes here */

/*
var stories = document.getElementById("stories");
for (var i=0;i<stories.childNodes.length; i++)
{
    //console.log("child " + i + " =" + stories.childNodes[i] +
    //" nodeType=" + stories.childNodes[i].nodeType);
    
    stories.childNodes[i].style.backgroundColor = "green";
}*/

var nodes = document.querySelectorAll("#stories div");

for (var i=0; i < nodes.length; i++) {
    nodes[i].style.backgroundColor = "green";
}