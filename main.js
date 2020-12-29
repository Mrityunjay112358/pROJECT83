event_mouse = "empty";
var last_position_of_X,last_position_of_Y;
my_canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color;
width_of_the_line;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    event_mouse = "mousedown";
    color = document.getElementById("colorin");
    width_of_the_line = document.getElementById("widthin");
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    event_mouse = "mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    event_mouse = "mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY  - canvas.offsetTop;
 if(event_mouse == "mousedown")
 {
     ctx.beginPath();
     ctx.strokestyle= color;
     ctx.lineWidth=width_of_the_line;
     console.log("Last Position of X and Y cordinates = ");
     console.log("x= "+last_position_of_X+"y= "+last_position_of_Y);
     ctx.moveTo(last_position_of_X,last_position_of_Y);
     ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
     ctx.stroke();
 }
 last_position_of_X = current_position_of_mouse_X;
 last_position_of_Y = current_position_of_mouse_Y;
}

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        last_position_of_x_touch = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y_touch = e.touches[0].clientY-canvas.offsetTop;
    }

canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x_touch, last_position_of_y_touch);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x_touch = current_position_of_touch_x; 
        last_position_of_y_touch = current_position_of_touch_y;
    }

    