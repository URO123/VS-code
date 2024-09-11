const API_KEY = "d7134f34c3854f2e828d201009d96a5c";

const elForm = document.querySelector(".form");

const elInput = document.querySelector(".input");

const elBox = document.querySelector(".box");
const elCity = document.querySelector(".div");
const elCityImg = document.querySelector(".city-img");
elForm.onsubmit = (e) => {
  e.preventDefault();
  console.log(elInput.value);

  const API =
    `https://api.openweathermap.org/data/2.5/weather?q=${elInput.value}&appid=` +
    API_KEY +
    "&units=metric";

  fetch(API)
    .then((res) => res.json())
    .then((data) => render(data));
  elInput.value = "";
};
function render(obj) {
  if (!obj.name) {
    const elRed = document.querySelector(".red");
    elBox.classList.add("dn");
    elRed.innerHTML = "Shahar nomi xato!!!";
    window.location.reload;
  } else if (obj.name) {
    console.log(obj);
    document.querySelector(".city").innerHTML = obj.name;
    elCity.appendChild(elCityImg);
    elCityImg.src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    console.log(elCityImg.src);
    document.querySelector(".weather").innerHTML = obj.weather[0].main;
    document.querySelector(".desc").innerHTML = obj.weather[0].description;
    document.querySelector(".text").innerHTML =
      Math.round(obj.main.temp) + " °C";
    const elImg = document.querySelector(".img");
    elImg.src = "./weather-wind-3.svg";
    document.querySelector(".deg").innerHTML = "Deg: " + obj.wind.deg + "°";
    document.querySelector(".speed").innerHTML =
      "Speed: " + obj.wind.speed + " m/s";
    elBox.classList.add("dib");
  }
}
