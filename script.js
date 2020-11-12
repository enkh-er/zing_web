var sidebar = document.getElementById('sidebar');

function openSideBar() {
    var element = document.getElementById("sidebar");
    element.classList.add("active");
}
function closeSideBar() {
    var element = document.getElementById("sidebar");
    element.classList.remove("active");
}

window.onclick = function(event) {
    let myStyle =  document.querySelector(".sidebar");
    let s=window.getComputedStyle(myStyle);
    console.log(s.right);
    if (event.target !== sidebar && s.right === "0px" ) {
        sidebar.classList.remove("active");
    }
  }


// =================side bar dropdown js==================

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
