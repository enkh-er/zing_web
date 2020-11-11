var modal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');

function openLoginForm() {
 document.getElementById("loginModal").style.display = "block";
 document.getElementById("registerModal").style.display = "none";
 }

 function closeLoginForm() {
 document.getElementById("loginModal").style.display = "none";
 }

 function openRegisterForm() {
 document.getElementById("registerModal").style.display = "block";
 document.getElementById("loginModal").style.display = "none";
 }

 function closeRegisterForm() {
 document.getElementById("registerModal").style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 window.onclick = function(event) {
     if (event.target == registerModal) {
         registerModal.style.display = "none";
     }
 }