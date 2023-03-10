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

//slideshows
document.getElementById("l-1").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1KC0dIDzusTMl5f1-vu7G2eiqmALbjScFrnJvPxt6Q-U/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-2").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1ozAsXSrpppFEgpaP_nxWGoarh27EIAZR2_izrR24BP8/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-3").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1wqOar_2g3TG23BQPFfm7t0gqBHl6bpuvvqBmlmJQ1xY/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-4").onclick = function(){
  window.open("https://docs.google.com/presentation/d/15O39Om0Myf9nbjimzP1NW6YSkNZpxyCoGIkmWx5ftgg/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-5").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1rH6BHyrDoT7fLAY_Q7PlrKOUv7t3D77VW8RFrL58cRM/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-6").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1LW-1W1JM6G008ZGU6l4DNwgj23e1d48dKI7IJJcV7WI/edit?usp=share_link", '_blank').focus();
}
document.getElementById("l-7").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1Wf-g62opZ_FmbQtX03uwywejNEMX8dRFelQMF3Z6FYM/edit?usp=share_link", '_blank').focus();
}


const bc = document.querySelector(".button-container");
const menu = document.querySelector(".menu");
const lessons = document.querySelectorAll(".lessons");

if (window.innerWidth <= 1300) {
  bc.classList.add("bc--hide");
  menu.classList.add("menu--visible");
  for (var i = 0; i < lessons.length; i++){
      lessons[i].classList.add("lessons--resize");
  }
}
window.addEventListener('resize', function(event) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  if (newWidth <= 1300) {
    bc.classList.add("bc--hide");
    menu.classList.add("menu--visible");
    for (var i = 0; i < lessons.length; i++){
      lessons[i].classList.add("lessons--resize");
    }
  }
  else {
    bc.classList.remove("bc--hide");
    menu.classList.remove("menu--visible");
    dock.classList.remove("dock--appear");
     for (var i = 0; i < lessons.length; i++){
      lessons[i].classList.remove("lessons--resize");
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





