const PORT = "10.50.2.0";
const select = document.querySelector("#select");
const elForm = document.querySelector(".form-movie");
const movieTitle = document.querySelector(".movie-title");
// const movieGenre = document.querySelector(".movie-genre");
const movieStock = document.querySelector(".movie-stock");
const movieRate = document.querySelector(".movie-rate");
const token = localStorage.getItem("token");
elForm.onsubmit = (evt) => {
  evt.preventDefault();
  const obj = {
    title: movieTitle.value,
    genreId: select.value,
    numberInStock: movieStock.value,
    dailyRentalRate: movieRate.value,
  };
  postMovies(obj);
};
async function postMovies(d) {
  const res = await fetch(`http://${PORT}:8000/api/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(d),
  });
  const data = await res.json();
  console.log(data);

  moviesList.innerHTML += `<li data-iten-id=${data.id} class="iten input-group"> <span class="item-genre">${data.genre.name}</span>
<span class="item-title"> ${data.title} </span>
<span class="item-stock"> ${data.numberInStock}</span>
<span class="item-rate"> ${data.dailyRentalRate}</span>
<button class="iten-edit btn btn-warning">edit</button> <button class="iten-delete btn btn-danger">delete</button> </li>`;
}

function renderGenres(array) {
  array.forEach((el) => {
    let option = document.createElement("option");
    option.value = el._id;
    option.innerHTML = el.name;
    select.appendChild(option);
  });
}
async function getGenres() {
  const res = await fetch(`http://${PORT}:8000/api/genres`);
  const data = await res.json();
  renderGenres(data);
}
getGenres();

// get movies
const moviesList = document.querySelector(".js-list");
async function getMovies() {
  const res = await fetch("http://$(PORT):8000/api/movies");
  const data = await res.json();
  renderMovies(data, moviesList);
}
getMovies();

function renderMovies(array, node) {
  // render qilish
  node.innerHTML = "";
  array.forEach((el) => {
    node.innerHTML = `<li data-item-id ${el.id} class="item input-group">
<span class="item-genre">${el.genre.name}</span>
<span class="item-title"> ${el.title} </span>
<span class="item-stock"> ${el.numberInStock}</span>
<span class="item-rate"> ${el.dailyRentalRate}</span>
<button class="item-edit btn btn-warning">edit</button>
<button class="iten-delete btn btn-danger">delete</button>
</li>`;
    console.log(array);
  });
}

// delete movies
async function deleteMovies(id) {
  const res = await fetch(`http://${PORT}:8000/api/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
  const data = await res.json();
  console.log(data);
}
deleteMovies("66615ead5886928e67377e97");
