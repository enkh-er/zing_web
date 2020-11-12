var modal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');
var borderModal=document.getElementById('borderModal');

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

 function openBorderForm() {
    document.getElementById("borderModal").style.display = "block";
}
   
function closeBorderForm() {
    document.getElementById("borderModal").style.display = "none";
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
 window.onclick = function(event) {
    if (event.target == borderModal) {
        modal.style.display = "none";
    }
}