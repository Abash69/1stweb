const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




var navbar = document.getElementById("navbar")
var menu = document.getElementById("menu")

window.onscroll = function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");
  }

  else{
    navbar.classList.remove("sticky");
  }
}
