const elList = document.querySelector(".js-list");
const elSelect = document.querySelector(".js-select");
const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-search");
renderList(films);

elSelect.addEventListener('change', function () {
const elSelectedMovies = [];
console.log(elSelect.value);
films.forEach(function (el) {
el.genres.forEach(function (e) {
if (e === elSelect.value) {
elSelectedMovies.push(el);
}
});
});
console.log(elSelectedMovies);
renderList(elSelectedMovies);
});

function change(arr) {
  let str = "";
  for (let item of arr) {
    str += `<span class="desc">
    ${item}
    </span>`;
  }
  return str;
}
const elModalBody = document.querySelector('.modal-body');

function ModalOchgich(id){
  let film = films.find((el)=>el.id == id)
  console.log(film);
  elModalBody.innerHTML = `<div>
  <img width="100" src="${film.poster}" alt="">
  <div class="right">
  <h3 class="title">${film.title}</h3>
  <p class="desc">${film.overview}</p>
  </div>
</div>`
};
function renderList(array) {
  elList.innerHTML = '';
  array.forEach((el) => {
    elList.innerHTML += `<li class="js-item">
    <img src="${el.poster}" alt="" class="img">
    <div class="box">
    <span class="item-id">
    Film's id: ${el.id}
    </span>
    <span class="year">
    Release date: ${new Date(el.release_date * 1000).getFullYear()}
    </span>
    <h4 class="title">${el.title}</h4>   
    <div class="desc1">
    Genres: ${change(el.genres)}
    </div>
    <div class="box2">
    <button onclick = "ModalOchgich(${el.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    MORE
  </button>
    <p class="btn btn-primary mt-3">SAVE</p>
    </div>
    </div>
    </li>`;


  });
}
elInput.addEventListener('keydown', ()=>{
  const searchMovies = films.filter((el)=>
  el.title.toLowerCase().includes(elInput.value.toLowerCase())
);
renderList(searchMovies);
});
elForm.onsubmit = (e) => {
  e.preventDefault();
  const searchMovies = films.filter((el)=>
  el.title.toLowerCase().includes(elInput.value.toLowerCase())
);
renderList(searchMovies);
}