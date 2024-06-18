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
   'backgrounds/b5.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.body.style.backgroundImage = "url('"+ images[x] + "')";
}
document.addEventListener("DOMContentLoaded", randomImage());


