$(function () {
  $(".dragme").draggable({});
});
var k = 0;
function numberFromInterval(min, max) {
  // min and max included
  if (k > max)
  k = min;
  return k++
}
var files;
var elements = document.getElementsByClassName("dragme");
window.onload = function () {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    var filesInput = document.getElementById("files");
    filesInput.addEventListener("change", function (event) {
      files = event.target.files; //FileList object
      var j = 0;
      for (var i = 0; i < 90; i++) {
        var file = files[numberFromInterval(0, files.length - 1)];
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

function reshuffle() {
  var j = 0;
  for (var i = 0; i < 90; i++) {
    var file = files[numberFromInterval(0, files.length - 1)];

    var picReader = new FileReader();
    picReader.addEventListener("load", function (event) {
      var picFile = event.target;
      elements[j++].src = picFile.result;
    });
    //Read the image
    picReader.readAsDataURL(file);
  }
}
