$(function () {
  $(".dragme").draggable({
    grid: [3,3]
  });
});

var files;
var elements = document.getElementsByClassName("dragme");
window.onload = function () {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    var filesInput = document.getElementById("files");
    filesInput.addEventListener("change", function (event) {
      files = event.target.files; //FileList object
      
      var j = 0;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (!file.type.match("image")) continue;
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
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
};

var repeatme = 0;
function Repeat() {
  repeatme++;
  var j = files.length* repeatme;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    var picReader = new FileReader();
    picReader.addEventListener("load", function (event) {
      var picFile = event.target;
      elements[j++].src = picFile.result;
    });
    //Read the image
    picReader.readAsDataURL(file);
  }
}


