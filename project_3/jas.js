var image;
var canvas2 = document.getElementById("can2");
function upload() {
  var canvas = document.getElementById("can1");
  var input = document.getElementById("inputd");
  image = new SimpleImage(input);
  image.drawTo(canvas);
}
function generate() {
  for (var px of image.values()) {
    var red = px.getRed();
    var green = px.getGreen();
    var blue = px.getBlue();
    var avg = (red + green + blue) / 3;
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  canvas2 = document.getElementById("can2");
  image.drawTo(canvas2);
}

function download() {
  const img = canvas2.toDataURL();
  const link = document.createElement("a");
  link.href = img;
  link.download = "image.png";
  link.click();
  link.remove();
}

document.querySelector("button").addEventListener("click", download);
