// const elText = document.querySelector('.text');
// const elBtn = document.querySelector('.btn');

// elText.innerHTML = localStorage.getItem('mode');

// elBtn.onclick = () => {
//     if(localStorage.getItem('mode') =='dark'){
//         localStorage.setItem('mode', 'light');
//     }
//     else if (localStorage.getItem('mode') == 'light'){
//         localStorage.setItem('mode', 'dark');
//     }
//     if(localStorage.getItem('mode') =='dark'){
//     document.body.classList.remove('light');
//     document.body.classList.add('dark');
//     }
//     if(localStorage.getItem('mode') =='light'){
//     document.body.classList.remove('dark');
//     document.body.classList.add('light');
//     }
//     elText.innerHTML = localStorage.getItem('mode');
    

// };


const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const elText = document.querySelector('.text');

elForm.onsubmit=(evt)=>{
    evt.preventDefault();
    localStorage.setItem('name', elInput.value);
    elText.innerHTML = 'Hi, ' + localStorage.getItem('name');
    elInput.value = ''
}
elText.innerHTML = 'Hi, ' + localStorage.getItem('name');
