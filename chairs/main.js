const elList = document.querySelector(".chairs-list");

function render(array, node) {
  array.forEach((el) => {
    node.innerHTML += `<li class="chairs-item">
        <a href="#" class="chairs-link">
        <a href="./detal.html?id=${el.id}" class="link">
            <img class="img" src="${el.image}" alt="chairs">
            </a>
            <h2 class="chairs-name">${el.name}</h2>
            <p class="chairs-price">$ ${el.price}</p>
        </a>
    </li>`;
  });
}

render(chairs, elList);
