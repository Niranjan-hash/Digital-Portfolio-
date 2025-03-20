
document.getElementById('more-about').addEventListener('click', function() {
         
    document.querySelector('.edu').classList.add('show');})

    document.getElementById('x').addEventListener('click', function() {
 
 document.querySelector('.edu').classList.remove('show');
 
 });
 const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});