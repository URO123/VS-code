const itemId = new URLSearchParams(window.location.search).get("id");
const elBody = document.querySelector("body");
function renderDetail() {
  const product = chairs.find((el) => el.id == itemId);
  console.log(product);
  elBody.innerHTML = `
    <div class="item-data">
            <img class="image-chair" src="${product.image}" alt="">
            <div class="box">
            <h2 class="site-type">${product.name}</h2>
            <h3 class="site-price">$ ${product.price}</h3>
            <a class="btn-1">Check out</a>
            <a class="btn-2">Add To Card</a>
            <p class="text">${product.description}</p>
        </div>
    `;
};
renderDetail() 
