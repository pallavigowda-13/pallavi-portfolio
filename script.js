/* ===============================
   TYPING ANIMATION
================================ */

const text = "Python Full Stack Developer";
let index = 0;
const speed = 120;

function typingAnimation(){

const typingElement = document.querySelector(".typing");

typingElement.textContent = text.slice(0,index);

index++;

if(index > text.length){
index = 0;
}

}

setInterval(typingAnimation, speed);



/* ===============================
   ACTIVE NAVBAR SECTION
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});