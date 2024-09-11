const elText1 = document.querySelector(".text1");
const elText2 = document.querySelector(".text2");
let soat = +prompt("Soatni kiriting: ");
let minut = +prompt("Minutni kiriting: ");
let sekund = +prompt("Sekundni kiriting: ");
function timer() {
  if (soat == 0 && minut == 0 && sekund == 0) {
    elText2.innerHTML = "Time is up !!!";
    elText2.style.color = "red";
  } else {
    sekund--;
    if (sekund < 0) {
      minut--;
      sekund = 59;
    }
    if (minut < 0) {
      soat--;
      minut = 59;
    }

    elText1.innerHTML = 
    `${String(soat).padStart(2, "0")}:
    ${String(minut).padStart(2, "0")}:
    ${String(sekund).padStart(2, "0")}`;
  }
}
timer();
setInterval(timer, 1000);