
//Navigation

document.getElementById('menu-1-button').addEventListener('click', openMenuone);

 function openMenuone(){

  document.getElementById('menu-1').classList.toggle('show');
}









// Appointment Model

var modal = document.getElementById("myModal");

var btn = document.getElementById("myappBtn");

var div = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

div.onclick = function() {
  modal.style.display = "none";
}

t
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


