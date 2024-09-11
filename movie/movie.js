const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
const elList = document.querySelector(".js-list");
const elBtn = document.querySelectorAll(".button");
elBtn[0].onclick = () => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => render(data.results, elList));
};
elBtn[1].onclick = () => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => render(data.results, elList));
};
elBtn[2].onclick = () => {
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => render(data.results, elList));
};
elBtn[3].onclick = () => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => render(data.results, elList));
};

function render(array, node) {
  node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
    <li class="item">
    <img class="img" src="https://image.tmdb.org/t/p/original${item.poster_path}">
    <div class="item-box">
          <h3 class="heading">${item.title}</h3>
          
    </div>
    </li>
    `;
});
}