const button =document.querySelector("#theme-toggle");
const navbar = document.querySelector(".navbar");

button.addEventListener("click", ()=> {
    navbar.classList.toggle("light-mode");
})