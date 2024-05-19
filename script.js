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
   'backgrounds/b11.jpg',
   'backgrounds/b12.jpg',
   'backgrounds/b13.jpg',
   'backgrounds/b15.jpg',
   'backgrounds/b15.jpg',
   'backgrounds/b16.jpg',
   'backgrounds/b17.jpg',
   'backgrounds/b18.jpg',
   'backgrounds/b19.jpg',
   'backgrounds/b20.jpg',
   'backgrounds/b21.jpg',
   'backgrounds/b22.jpg',
   'backgrounds/b23.jpg',
   'backgrounds/b24.jpg',
   'backgrounds/b25.jpg',
   'backgrounds/b26.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.body.style.backgroundImage = "url('"+ images[x] + "')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}
document.addEventListener("DOMContentLoaded", randomImage);


