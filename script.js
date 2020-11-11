

var sidebar = document.getElementsById('sidebar');
function openSideBar() {
    var element = document.getElementById("sidebar");
    element.classList.add("active");
}
function closeSideBar() {
    var element = document.getElementById("sidebar");
    element.classList.remove("active");
}

// window.onload = function() {
//     document.onclick=function(event){
//         if (event.target.id !== sidebar) {
//             sidebar.classList.remove("active");
//         }
//     }
// }
var modal = document.getElementById('sidebar');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeSideBar();
  }
}
// window.onclick = function(event) {
//     if (event.target.id !== sidebar) {
//         closeSideBar();
//     }
// }
// $('body').click(function(){
//     $('#sidebar').removeClass('active');
// });
// document.getElementsByTagName( "body" ).click(function( event ) {
//   var a  = event.target;
//   if(a !== sidebar){
//     closeSideBar();
// //close the sidebar
// //you may also want to test if it is actually open before calling the close function.
// }
// });