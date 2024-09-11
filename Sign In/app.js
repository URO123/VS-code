// const publicBody = `
//     <header class="site-header">
//       <div class="container">
//         <div class="site-header_inner">
//           <a href="./index.html" class="site-header_logo-link">Logo</a>
//           <ul class="nav">
//             <li class="nav_item">
//               <a href="./login/login.html" class="nav_link">Login</a>
//             </li>
//             <li class="nav_item">
//               <a href="./register/register.html" class="nav_link">Register</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
// `;
// const privateBody = `<div class="box-list">
// <button class="button">Popular</button>
// <button class="button">Tv</button>
// <button class="button">Up coming</button>
// <button class="button">Top Rated</button>
// <button class='signout'>sign out</button>
// </div>
// <ul class="list"></ul>
// `
// function renderBody(){
//     if(window.localStorage.getItem('token')){
//         return privateBody;
//     }else return publicBody;
// }
// document.body.innerHTML = renderBody();
// const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
// const elList = document.querySelector(".list");
// const elBtn = document.querySelectorAll(".button");
// elBtn[0].onclick = () => {
//   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => render(data.results, elList));
// };
// elBtn[1].onclick = () => {
//   fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => render(data.results, elList));
// };
// elBtn[2].onclick = () => {
//   fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => render(data.results, elList));
// };
// elBtn[3].onclick = () => {
//   fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => render(data.results, elList));
// };

// function render(array, node) {
//   node.innerHTML = "";
//   array.forEach((item) => {
//     node.innerHTML += `
//     <li class="item">
//     <img class="img" src="https://image.tmdb.org/t/p/original${item.poster_path}">
//     <div class="item-box">
//           <h3 class="heading">${item.title}</h3>
//     </div>
//     </li>
//     `;
// });
// }
// if (document.querySelector('.signout')){
  //     const signOut = document.querySelector('.signout');
  //     signOut.onclick = () => {
    //         window.localStorage.removeItem('token');
    //         window.location.reload();
    //     };
    // }
    const PORT = '10.30.2.236'
    const select = document.querySelector("#select");
const elForm = document.querySelector(".form-movie");
const movieTitle = document.querySelector(".movie-title");
// const movieGenre = document.querySelector(".movie-genre");
const movieStock = document.querySelector(".movie-stock");
const movieRate = document.querySelector(".movie-rate");
const token = localStorage.getItem('token');
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
async function postMovies (d) {
  const res = await fetch(`http://${PORT}:8000/api/movies`, {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  'x-auth-token':token,
  },
  body: JSON.stringify(d),
  });
  const data = await res.json();
  I
  console.log(data);
  }
  function renderGenres (array) {
  array.forEach((el) => {
  let option = document.createElement("option");
  option.value = el._id;
  option.innerHTML = el.name;
  select.appendChild(option);
  });
  }
async function getGenres() {
  const res = await fetch(`http://${PORT}:8000/api/genres`)
  const data = await res.json();
  renderGenres(data);
  }
  getGenres () 
  