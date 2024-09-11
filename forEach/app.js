// let numbers = [-3, 5, 6, 8, -9, 3, 2];
// let sum = 1;

// numbers.forEach(function (el) {
//   if ( el > 0) {
//     sum= sum * el;
//   }
// });

// console.log(sum);

// 2-vazifa

// let numbers = [-3, 5, 6, 8, -9, 3, 2];

// let sum = 0;

// numbers.forEach(function (el) {
//   if (el > -5 && el < 5) {
//     sum += el;
//   }
// });

// console.log(sum);

// 3-vazifa

// let numbers = [6, true, 'salom', {}, [], 8, 9];

// let sum = [];

// numbers.forEach(function (el) {
//   sum.push( typeof el);
// });

// console.log(sum);

// ------------------------------------------map()--------------------------------------------------
// let arr = ['salom', 'hayr', 'world', 'pdp'];
// let newArray = arr.map((el) => el.length);
// console.log(newArray);
let products = [
  {
    id: 1,
    name: 'iPhone',
    price: 999,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
  },
  {
    id: 2,
    name: 'SmartWatch',
    price: 399,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
  },
  {
    id: 3,
    name: 'MacBook',
    price: 1199,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
  },
  {
    id: 4,
    name: 'iMac',
    price: 2499,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 499,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
  },
];

let elList = document.querySelector(".list");
let elForm = document.querySelector("form");
let elStart = document.querySelector(".start");
let elEnd = document.querySelector(".end");
let elName = document.querySelector(".name");
let elPrice = document.querySelector(".price");
// elName.onclick = () => {
//   products.sort(function (a, b) {
//     if (a.name > b.name)return 1;
//     else return -1;
//   })
// };
// elPrice.onclick = () => {
//   products.sort(function (a, b) {
//     if (a.price > b.price)return 1;
//     else return -1;
//   })
// };
elName.onclick = () => {
  const sortName = products.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else return -1;
  });
  renderList(sortName);
};

elPrice.onclick = () => {
  const sortPrice = products.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else return -1;
  });
  renderList(sortPrice);
};
function renderList(array) {
  elList.innerHTML = "";
  if (array.length == 0) {
    elText.innerHTML = "Bunday mahsulot mavjud emas!";
  }
  array.forEach((el) => {
    elList.innerHTML +=  ` <li class="item">
    <p>id: ${el.id}</p>
    <strong>${el.price} $</strong>
    <h3>${el.name}</h3>
    <p>${el.desc}</p>
    </li>`;
  });
}
renderList(products)  
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  console.log(elStart.value);
  console.log(elEnd.value);

  const newArray = products.filter(function (e) {
    return e.price >= elStart.value && e.price <= elEnd.value;
  });

  console.log(newArray);

  elList.innerHTML = "";

  for (let product of newArray) {
    elList.innerHTML += ` <li class="item">
    <p>id: ${product.id}</p>
    <strong>${product.price} $</strong>
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    </li>`;
  }
  if(elInput.length >= 0) {
    elText.innerHTML = 'Siz kerakli summadan kam narx yozdingiz !!!'
    elText.innerHTML.style.color = 'red';
  }
  elStart.value = '';
  elEnd.value = '';
});