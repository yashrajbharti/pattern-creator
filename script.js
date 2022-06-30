$( function() {
    $( ".dragme" ).draggable({

    });
  } );
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  var elements = document.getElementsByClassName('dragme');
  window.onload = function() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
      var filesInput = document.getElementById("files");
      filesInput.addEventListener("change", function(event) {
        var files = event.target.files; //FileList object
        var j = 0;
        for (var i = 0; i < 91; i++) {
          var file = files[randomIntFromInterval(0, files.length-1)];
          //Only pics
          if (!file.type.match('image'))
            continue;
          var picReader = new FileReader();
          picReader.addEventListener("load", function(event) {
            var picFile = event.target; 
            elements[j++].src = picFile.result;   
          });
          //Read the image
          picReader.readAsDataURL(file);
        }
      });
    } else {
      console.log("Your browser does not support File API");
    }
  }