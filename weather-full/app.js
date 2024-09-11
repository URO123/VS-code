const elForm = document.querySelector(".form");
const inputSearch = document.querySelector(".input-search");
const cityTitle = document.querySelector(".city-title");
const cityDegree = document.querySelector(".city-degree");
const cityDeg = document.querySelector(".city-deg");
const citySpeed = document.querySelector(".city-speed");
const cityImg = document.querySelector(".city-img");
const cityText = document.querySelector(".city-text");
const recentlyList = document.querySelector(".recently-list");
const favouriteList = document.querySelector(".favourite-list");
const API_KEY = "d7134f34c3854f2e828d201009d96a5c";
const recentlyCitiesBox = document.querySelector(".recently-cities");
const cityLocation = document.querySelector(".city-location");
const loader = document.querySelector(".loader-box");

let recentlyCities = (
  JSON.parse(localStorage.getItem("recentlyCities")) || []
).slice(0, 5);

renderRecently(recentlyCities, recentlyList);

function loaderShow() {
  loader.classList.add("show");
  document.querySelector(".wrapper").style.display = "none";
}

function loaderHide() {
  loader.classList.remove("show");
  document.querySelector(".wrapper").style.display = "flex";
}

elForm.onsubmit = (evt) => {
  evt.preventDefault();

  recentlyCities.unshift(inputSearch.value);

  if (recentlyCities.length > 5) {
    recentlyCities.pop();
  }
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch.value}&appid=${API_KEY}&units=metric`;

  loaderShow();
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      loaderHide();
      render(data);
    });

  localStorage.setItem("recentlyCities", JSON.stringify(recentlyCities));
  recentlyCities = JSON.parse(localStorage.getItem("recentlyCities"));

  renderRecently(recentlyCities, recentlyList);

  inputSearch.value = "";
};

function render(obj) {
  console.log(obj);
  cityTitle.innerHTML = obj.name;
  cityDegree.innerHTML = Math.round(obj.main.temp) + " °";
  cityDeg.innerHTML = "Deg: " + obj.wind.deg;
  citySpeed.innerHTML = "Speed: " + obj.wind.speed;
  cityImg.src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  cityText.innerHTML = `<span> ${obj.weather[0].main}</span> <span> ${obj.weather[0].description}</span>`;
  cityLocation.href = `https://www.google.com/maps/place/${
    obj.coord.lat + "," + obj.coord.lon
  }`;
}

function renderRecently(array, list) {
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += ` <li class="recently-item">
    <button class="recently-title">${el}</button
    ><button class="recently-favourite" data-id=${el}>*</button>
      <button class="remove" data-id=${el}>x</button> 
    </li>`;
  });
}
let favouriteCities = JSON.parse(localStorage.getItem("favouriteCities")) || [];

renderFavourite(favouriteCities, favouriteList);

recentlyList.onclick = (evt) => {
  // console.log(evt.target);
  if (evt.target.classList.contains("recently-title")) {
    console.log(evt.target.innerHTML);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${evt.target.innerHTML}&appid=${API_KEY}&units=metric`;
    loaderShow();
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        loaderHide();
        render(data);
      });
    renderRecently(recentlyCities, recentlyList);
  }

  if (evt.target.classList.contains("recently-favourite")) {
    console.log(evt.target.dataset.id);
    favouriteCities.unshift(evt.target.dataset.id);
    if (favouriteCities.length > 7) {
      favouriteCities.pop();
    }
    localStorage.setItem("favouriteCities", JSON.stringify(favouriteCities));
    renderFavourite(favouriteCities, favouriteList);
  }

  if (evt.target.classList.contains("remove")) {
    console.log(evt.target);

    let filteredRecently = recentlyCities.filter(
      (el) => evt.target.dataset.id != el
    );
    
    localStorage.setItem("recentlyCities", JSON.stringify(filteredRecently));
    recentlyCities = JSON.parse(localStorage.getItem("recentlyCities")) || [];

    renderRecently(filteredRecently, recentlyList);
  }
};

favouriteList.onclick = (evt) => {
  // console.log(evt.target);
  if (evt.target.classList.contains("remove")) {
    console.log(evt.target);

    let filteredFavourite = favouriteCities.filter(
      (el) => evt.target.dataset.id != el
    );

    localStorage.setItem("favouriteCities", JSON.stringify(filteredFavourite));
    favouriteCities = JSON.parse(localStorage.getItem("favouriteCities")) || [];

    renderFavourite(filteredFavourite, favouriteList);
  }
  if (evt.target.classList.contains("favourite-title")) {
    console.log(evt.target.innerHTML);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${evt.target.innerHTML}&appid=${API_KEY}&units=metric`;
    loaderShow();
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        loaderHide();
        render(data);
      });
  }
};

function renderFavourite(array, list) {
  list.innerHTML = "";
  console.log(array);
  array.forEach((el) => {
    list.innerHTML += `<li class="recently-item">
  <button class="favourite-title">${el}</button>
  <button class="remove" data-id=${el}>x</button> 
  </li>`;
  });
}

function renderCurrentPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchCurrentPlace(position);
    });
  }
}
renderCurrentPosition();

function fetchCurrentPlace(pos) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => render(data));
}

