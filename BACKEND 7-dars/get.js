const elList = document.querySelector('.get-list');
fetch("http://172.20.10.7:8000/api/movies")
  .then((res) => res.json())
  .then((data) => render(data, elList));

  function render(array, node) {
  node.innerHTML = '';
  array.forEach((item) => {
    node.innerHTML += `
    <li>
    <h3>${item.title}</h3>
    <h2>${item.name}</h2>
    <p>${item._id}</p>
    <p>${item.numberInStock}</p>
    <p>${item.dailyRentalRate}</p>
    </li>
    `
  });
  }