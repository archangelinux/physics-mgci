window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

//navigation
document.getElementById("home-nav").onclick = function() {
  window.location = "/";
}
document.getElementById("team-nav").onclick = function() {
  window.location = "/team";
}
document.getElementById("contests-nav").onclick = function() {
  window.location = "/contests";
}
document.getElementById("explore-nav").onclick = function() {
  window.location = "/explore";
}
document.getElementById("home-dock").onclick = function() {
  window.location = "/";
}
document.getElementById("team-dock").onclick = function() {
  window.location = "/team";
}
document.getElementById("contests-dock").onclick = function() {
  window.location = "/contests";
}
document.getElementById("explore-dock").onclick = function() {
  window.location = "/explore";
}
document.getElementById("instagram-nav").onclick = function() {
window.open("https://www.instagram.com/mgci.physics/", '_blank').focus();
}
document.getElementById("discord-nav").onclick = function(){
  window.open("https://discord.gg/EbhFGrHCjF", '_blank'),focus();
}
document.getElementById("instagram-dock").onclick = function() {
window.open("https://www.instagram.com/mgci.physics/", '_blank').focus();
}
document.getElementById("discord-dock").onclick = function(){
  window.open("https://discord.gg/EbhFGrHCjF", '_blank'),focus();
}
const dock = document.querySelector(".dock");
document.getElementById("menu").onclick = function(){
  dock.classList.add("dock--appear");
}

document.getElementById("chevron").onclick = function(){
  dock.classList.remove("dock--appear");
}



const bc = document.querySelector(".button-container");
const menu = document.querySelector(".menu");
const profiles = document.querySelectorAll(".profiles");


if (window.innerWidth <= 1300) {
  bc.classList.add("bc--hide");
  menu.classList.add("menu--visible");
  for (var i = 0; i < profiles.length; i++){
      profiles[i].classList.add("profiles--resize");
    }

}
window.addEventListener('resize', function(event) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  if (newWidth <= 1300) {
    bc.classList.add("bc--hide");
    menu.classList.add("menu--visible");
    for (var i = 0; i < profiles.length; i++){
      profiles[i].classList.add("profiles--resize");
    }
  
  }
  else {
    bc.classList.remove("bc--hide");
    menu.classList.remove("menu--visible");
    dock.classList.remove("dock--appear");
     for (var i = 0; i < profiles.length; i++){
      profiles[i].classList.remove("profiles--resize");
    }

  }
});


//animtion

const nav = document.getElementById("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  }
  else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});







