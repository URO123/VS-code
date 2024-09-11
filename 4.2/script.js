const elText = document.querySelector(".text");
const elText2 = document.querySelector(".text2");
let a = new Date();
let b = new Date();
setTimeout(function () {
console.log( elText.innerHTML =  a.getDate() + '.' + a.getMonth() + '.' + a.getFullYear());}, 1000);
setTimeout(function () {console.log( elText2.innerHTML +=  b.getHours() + ':' + b.getMinutes() + ':' + b.getSeconds());}, 1000);