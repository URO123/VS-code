const elList = document.querySelector('.list');
const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const elBtn = document.querySelector('.btn2');
elForm.onsubmit = (e) => {
e.preventDefault();
const elItem = document.createElement('li');
const elText = document.createElement('span');
elText.textContent = 'X';
elItem.innerHTML = elInput.value;
elItem.appendChild(elText);
elText.setAttribute('class', 'text');
elItem.setAttribute('class', 'item');
elList.appendChild(elItem);
elInput.value = '';
elText.onclick = (evt) => {
evt.target.parentElement.remove();
}
};
let record = new webkitSpeechRecognition();

elBtn.onclick = () => {
    record.start();
}

record.lang = "uz-UZ";

record.onend = () => {
    console.log('Eshitdim');
}

record.onerror = (evt) => {
    console.log(evt + "xatolik!");
};

record.onresult = (evt) => {
    console.log(evt.results[0][0].transcript);


    elInput.value = evt.results[0][0].transcript;
}
