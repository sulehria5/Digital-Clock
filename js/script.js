title.innerHTML="DIGITAL CLOCK";


function time() {
var d = new Date();
document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);