// canvas.js - JavaScript for circle program
//
// D Provine, 26 Mar 2012

var mouseX, mouseY;

var Xpoints = new Array();
var Ypoints = new Array();
var NumPoints = 0;

function mouseUp(e)
{
    if (NumPoints >= 3) {
        NumPoints = 0;
    }

    var context = e.getContext("2d");
    context.fillStyle="#000";
    context.fillText("("+ mouseX + ", " + mouseY + ")", mouseX, mouseY);

    Xpoints[NumPoints] = mouseX;
    Ypoints[NumPoints] = mouseY;
    NumPoints++;

    // draw plus at point
    HorMinX = mouseX - 20;
    if (HorMinX < 0) {
        HorMinX = 0;
    }
    HorMaxX = mouseX + 20;
    if (HorMaxX > 618) {
        HorMaxX = 618;
    }
    // offset by 0.5 on the value that does not change
    // see http://diveintohtml5.info/canvas.html ;
    // search for "Why did you start x and y at 0.5"
    context.beginPath();
    context.moveTo(HorMinX, mouseY + 0.5);
    context.lineTo(HorMaxX, mouseY + 0.5);
    context.closePath();
    // actually draw now
    context.strokeStyle = "#e00";
    context.stroke();

    VertMinY = mouseY - 20;
    if (VertMinY < 0) {
        VertMinY = 0;
    }
    VertMaxY = mouseY + 20;
    if (VertMaxY > 800) {
        VertMaxY = 800;
    }
    // offset by 0.5 on the value that does not change
    context.beginPath();
    context.moveTo(mouseX + 0.5, VertMinY);
    context.lineTo(mouseX + 0.5, VertMaxY);
    context.closePath();
    // actually draw now
    context.strokeStyle = "#e00";
    context.stroke();

    if (NumPoints == 3) {
        CircleThreePoints();
    }
}


function CircleThreePoints()
{
}



function getMousePos(canvas, evt){
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}

function setup(){
    var canvas = document.getElementById('circle');
    var context = canvas.getContext('2d');
 
    canvas.addEventListener('mousemove', function(evt){
        var mousePos = getMousePos(canvas, evt);
        mouseX = mousePos.x;
        mouseY = mousePos.y;
    }, false);
}


