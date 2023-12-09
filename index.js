var imagesPath = ["favicon&icon.avif","sc-1.avif", "sc-2.avif"];
var img = document.getElementById("showimg");
var butnav = document.getElementsByClassName("clickable");
var navitems = document.getElementById("container");
var dialog = document.getElementById("dialoger");
var dated = document.getElementById("date");
var currentind = 0;
function changeimg(changer) {
currentind+=changer;
if(currentind < 0){
currentind = imagesPath.length-1;
}else if(currentind >= imagesPath.length){
currentind = 0;
}
img.src = imagesPath[currentind];
}
function showtoggle(){
navitems.classList.toggle("show");
for (var i=0; i<butnav.length; i++){
butnav[i].classList.toggle("open");
}
}
function openDialog() {
dialog.style.display = "block";
var date = new Date();
var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth() + 1).padStart(2, '0');
var day = String(date.getDate()).padStart(2, '0');

var curDate = `${year}-${month}-${day}`;
dated.value = String (curDate);
}
function closeDialog() {
dialog.style.display = "none";
}
