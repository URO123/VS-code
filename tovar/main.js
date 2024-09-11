const elMins = document.querySelector('.minus');
const elSpan = document.querySelector('.span');
const elPluse = document.querySelector('.plus');
const elPrice = document.querySelector('.nav__price');
elPrice.innerText = 300;
elMins.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(--elSpan.innerText);
    if (elSpan.innerText < 1) {
        elSpan.innerText = 1
    }
    else{
        elPrice.innerText = ((Number(elPrice.innerText)) - 300);
    }
    if (elPrice.innerText < 300) {
        elPrice.innerText = 300
    }
});

elPluse.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(++elSpan.innerText);
    elPrice.innerText = (300 + (Number(elPrice.innerText)));
});