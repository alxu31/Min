function updateDateTime() {
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

function randomImage(){
  var images = [
   'backgrounds/b1.jpg',
   'backgrounds/b2.jpg',
   'backgrounds/b3.jpg',
   'backgrounds/b4.jpg',
   'backgrounds/b5.jpg',
   'backgrounds/b6.jpg',
   'backgrounds/b7.jpg',
   'backgrounds/b8.jpg',
   'backgrounds/b9.jpg',
   'backgrounds/b10.jpg',
   'backgrounds/b11.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.body.style.backgroundImage = "url('"+ images[x] + "')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}
document.addEventListener("DOMContentLoaded", randomImage);


