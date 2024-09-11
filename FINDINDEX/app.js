const elText = document.querySelector('.text');
const elText2 = document.querySelector('.text2');
const elText3 = document.querySelector('.text3');
let products = [
    {
        id: 1,
        name:'iPhone',
        price: 999,
    },
    {
        id: 2,
        name:'MacBook',
        price: 1199,
    },
    {
        id: 3,
        name:'iMac',
        price: 2499,
    },
    {
        id: 5,
        name:'Speaker',
        price: 499,
    },
];
let product = products.find((el)=> el.name === 'Speaker');
console.log(product.name);
elText.innerHTML = product.id;
elText2.innerHTML = product.name;
elText3.innerHTML = `${product.price} $`;