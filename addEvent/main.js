const elBtn = document.querySelector('.btn');
const elText = document.querySelector('.text');

elBtn.addEventListener('click',function(){
    elText.innerHTML = 'Bosildi'
    elText.style.color = 'green'
});

const elBtn2 = document.querySelector('.btn2');
const elText2 = document.querySelector('.text2');
const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');

elForm.addEventListener('submit',function(e){
    e.preventDefault();
    elText2.innerHTML = elInput.value;
});