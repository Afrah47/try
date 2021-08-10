function Change() {
    var color = document.getElementById("COLOR").value;
  var width = document.getElementById("WIDTH").value;
  
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  var mouseEvent = "empty";
  var last_position_of_x , last_position_of_y ; 
  color = color;
  width_of_line = width; 
  
  canvas.addEventListener("mousedown" , My_mouseDown);
  function My_mouseDown(e) {
      mouseEvent = "mouseDown" ; 
  }
  
  canvas.addEventListener("mousemove" , My_mouseMove);
  function My_mouseMove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  if (mouseEvent == "mouseDown") {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      console.log("last Position of X and Y coordinates = ");
      console.log("X =    " + last_position_of_x + "     Y =    " + last_position_of_y);
      ctx.moveTo(last_position_of_x , last_position_of_y);
      console.log("current position of X and Y coordinates =      ");
      console.log("X =    " + current_position_of_mouse_x + "    Y =    " + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
      ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x;
  last_position_of_y = current_position_of_mouse_y;
  }
  
  canvas.addEventListener("mouseup" , My_mouseUp);
  function My_mouseUp(e) {
      mouseEvent = "mouseUp"; 
  }
  
  canvas.addEventListener("mouseleave" , My_mouseLeave);
  function My_mouseLeave(e) {
      mouseEvent = "mouseLeave";
  }
  
  
  }