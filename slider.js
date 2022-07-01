var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  
  var div = document.querySelectorAll('#image img');
  for(var i = 0; i < 90; i ++) {
  div[i].style.webkitTransform = 'rotate('+this.value+'deg)'; 
    div[i].style.mozTransform    = 'rotate('+this.value+'deg)'; 
    div[i].style.msTransform     = 'rotate('+this.value+'deg)'; 
    div[i].style.oTransform      = 'rotate('+this.value+'deg)'; 
    div[i].style.transform       = 'rotate('+this.value+'deg)'; 
  }
}