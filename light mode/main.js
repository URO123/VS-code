const elBtn = document.querySelector(".mode-control")
const elMode = document.querySelector(".mode")
const elBody = document.querySelector("body")

elMode.addEventListener("click", (e) =>{
e.preventDefault();
elBody.classList.toggle("dark")
elMode.classList.toggle("dark-mode")
});