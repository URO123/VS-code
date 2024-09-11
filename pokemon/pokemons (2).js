const elList = document.querySelector(".js-list");
const elSelect = document.querySelector(".js-select");
const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-search");
renderList(pokemons);

elSelect.addEventListener("change", function () {
  const elSelectedPokemons = [];
  console.log(elSelect.value);
  pokemons.forEach(function (el) {
    el.genres.forEach(function (e) {
      if (e === elSelect.value) {
        elSelectedPokemons.push(el);
      }
    });
  });
  console.log(elSelectedPokemons);
  renderList(elSelectedPokemons);
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
function renderList(array) {
  elList.innerHTML = "";
  array.forEach((el) => {
    elList.innerHTML +=`<li class="js-item"><p class="js-id">№ ${pokemon.id}</p><img class="js-img" src="${pokemon.img}"><div class="box3"><p class="js-name">${pokemon.name}</p><div class="box2"><p class="js-type">Grass</p><p class="js-type2">Poison</p></div><div class="box"><p class="js-height">${pokemon.height}</p><p class="js-weight">${pokemon.weight}</p></div></div></li>`;
  });
}
// for (let pokemon of pokemons) {
//   const elItem = document.createElement("li");
//   const elImage = document.createElement("img");
//   const elId = document.createElement("p");
//   const elName = document.createElement("p");
//   const elHeight = document.createElement("p");
//   const elWeight = document.createElement("p");
//   const elType = document.createElement("p");
//   const elType2 = document.createElement("p");
//   const elBox = document.createElement("div");
//   const elBox2 = document.createElement("div");
//   const elBox3 = document.createElement("div");
//   elItem.setAttribute("class", "js-item");
//   elBox3.setAttribute("class", "box3");
//   elName.setAttribute("class", "js-name");
//   elHeight.setAttribute("class", "js-height");
//   elWeight.setAttribute("class", "js-weight");
//   elId.setAttribute("class", "js-id");
//   elType.setAttribute("class", "js-type");
//   elType2.setAttribute("class", "js-type2");
//   elBox.setAttribute("class", "box");
//   elBox2.setAttribute("class", "box2");
//   elImage.setAttribute("class", "js-img");
//   elImage.src = pokemon.img;
//   elId.innerHTML = "№" + " " + pokemon.id;
//   elName.innerHTML = pokemon.name;
//   elHeight.innerHTML = pokemon.height;
//   elWeight.innerHTML = pokemon.weight;
//   elType.innerHTML = pokemon.type[0];
//   elType2.innerHTML = pokemon.type[1];
//   elItem.appendChild(elId);
//   elItem.appendChild(elImage);
//   elBox3.appendChild(elName);
//   elBox3.appendChild(elBox2);
//   elBox3.appendChild(elBox);
//   elBox.appendChild(elHeight);
//   elBox.appendChild(elWeight);
//   elItem.appendChild(elBox3);
//   elBox2.appendChild(elType);
//   elBox2.appendChild(elType2);
//   elList.appendChild(elItem);
//   if (elType2.innerHTML === "undefined") {
//     elType2.innerHTML = "";
//     elType2.setAttribute("class", "position");
//     elBox2.setAttribute("class", "pon");
//   }
// }
elInput.addEventListener("keydown", () => {
  const searchPokemons = pokemons.filter((el) =>
    el.title.toLowerCase().includes(elInput.value.toLowerCase())
  );
  renderList(searchPokemons);
});
elForm.onsubmit = (e) => {
  e.preventDefault();
  const searchPokemons = pokemons.filter((el) =>
    el.title.toLowerCase().includes(elInput.value.toLowerCase())
  );
  renderList(searchPokemons);
};
