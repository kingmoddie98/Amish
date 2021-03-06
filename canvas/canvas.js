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
    if (HorMaxX > 401) {
        HorMaxX = 401;
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
    if (VertMaxY > 400) {
        VertMaxY = 400;
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
    var canvas = document.getElementById('circle');
    var context = canvas.getContext('2d');

    MidPoint1_X = ( Xpoints[0] + Xpoints[1] ) / 2.0;
    MidPoint1_Y = ( Ypoints[0] + Ypoints[1] ) / 2.0;

    MidPoint2_X = ( Xpoints[1] + Xpoints[2] ) / 2.0;
    MidPoint2_Y = ( Ypoints[1] + Ypoints[2] ) / 2.0;

    SlopeSegment1 = (Ypoints[1] - Ypoints[0]) / (Xpoints[1] - Xpoints[0]);
    Perp1Slope  = -1.0 / SlopeSegment1;
    Perp1Yint   = MidPoint1_Y - Perp1Slope * MidPoint1_X;

    SlopeSegment2 = (Ypoints[2] - Ypoints[1]) / (Xpoints[2] - Xpoints[1]);
    Perp2Slope  = -1.0 / SlopeSegment2;
    Perp2Yint   = MidPoint2_Y - Perp2Slope * MidPoint2_X;

    if (Perp2Slope == Perp1Slope) {
        alert("Points are collinear; no circle can be drawn.");
        return;
    }

    CenterX = (Perp1Yint - Perp2Yint) / (Perp2Slope - Perp1Slope);
    CenterY = Perp1Slope * CenterX + Perp1Yint;

    Radius  = Math.sqrt( ((CenterX - Xpoints[0]) * (CenterX - Xpoints[0])) +
                         ((CenterY - Ypoints[0]) * (CenterY - Ypoints[0])));

    // arc takes centerX, centerY, radius, (those obvious)
    //           startangle, endangle, (for drawing arcs)
    //           counterclockwise (true or false)

    context.beginPath();
    context.arc(CenterX, CenterY, Radius, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "#0e0";
    context.stroke();
}


function circle()
{
    var canvas = document.getElementById('circle');
    var context = canvas.getContext('2d');
    // arc takes centerX, centerY, radius, (those obvious)
    //           startangle, endangle, (for drawing arcs)
    //           counterclockwise (true or false)

    context.beginPath();
    context.arc(100, 300, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "#00e";
    context.fillStyle = "#00e";
    context.stroke();
    context.fill();
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


