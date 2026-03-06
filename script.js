window.addEventListener("scroll", function(){

const hero = document.querySelector(".hero");

let scroll = window.pageYOffset;

hero.style.backgroundPositionY = scroll * 0.5 + "px";

});