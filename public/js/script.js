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
document.getElementById("join-us").onclick = function(){
  window.open("https://discord.gg/EbhFGrHCjF", '_blank'),focus();
}
document.getElementById("learn-more").onclick = function(){
    window.location = "html/explore.html";
}

document.getElementById("lesson-1").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1LW-1W1JM6G008ZGU6l4DNwgj23e1d48dKI7IJJcV7WI/edit?usp=sharing", '_blank').focus();
}
document.getElementById("lesson-2").onclick = function(){
  window.open("https://docs.google.com/presentation/d/1Wf-g62opZ_FmbQtX03uwywejNEMX8dRFelQMF3Z6FYM/edit?usp=sharing", '_blank').focus();
}

const bc = document.querySelector(".button-container");
const menu = document.querySelector(".menu");
const mg = document.querySelector(".moshed-gif");
const mt = document.querySelector(".mt");

if (window.innerWidth <= 1300) {
  bc.classList.add("bc--hide");
  menu.classList.add("menu--visible");
  mg.classList.add("gif--fade");
  mt.classList.add("mt--resize");
}
window.addEventListener('resize', function(event) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  if (newWidth <= 1300) {
    bc.classList.add("bc--hide");
    menu.classList.add("menu--visible");
    mg.classList.add("gif--fade");
    mt.classList.add("mt--resize");
  }
  else {
    bc.classList.remove("bc--hide");
    menu.classList.remove("menu--visible");
    mg.classList.remove("gif--fade");
    mt.classList.remove("mt--resize");
    dock.classList.remove("dock--appear");

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


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".points")[0].classList.add("about--animate");
      document.querySelectorAll(".points")[1].classList.add("about--animate");
      document.querySelectorAll(".points")[2].classList.add("about--animate");
        document.querySelectorAll(".points")[3].classList.add("about--animate");
      document.querySelectorAll("#meeting1").classList.add("meeting1-animate");
    }
  })
});
observer.observe(document.querySelector(".about"));





