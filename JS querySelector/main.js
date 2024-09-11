// const elBtn2 = document.querySelector('.btn');
// const elForm = document.querySelector('.form');
// const elInput = document.querySelector('.input');

// elForm.addEventListener('submit',function(evt){
//     evt.preventDefault();
//     let odam = 3.6;
// let velik = 20.1;
// let moshin = 70;
// let samalyot = 800;
// let odam2 = Math.floor(elInput.value/odam);
// let velik2 =  Math.floor(elInput.value/velik);
// let moshin2 = Math.floor(elInput.value/moshin);
// let samalyot2 = Math.floor(elInput.value/samalyot);
// let odam3 = (elInput.value/odam - odam2)*60;
// let velik3 =  (elInput.value/velik - velik2)*60;
// let moshin3 = (elInput.value/moshin - moshin2)*60;
// let samalyot3 = (elInput.value/samalyot - samalyot2)*60;
// let b = Math.floor(odam3);
// let c = Math.floor(velik3);
// let d = Math.floor(moshin3);
// let e = Math.floor(samalyot3);
// if(b==0){elText.innerHTML='ㅤ'};
// if(c==0){elTexta.innerHTML='ㅤ'};
// if(d==0){elTextb.innerHTML='ㅤ'};
// if(e==0){elTextc.innerHTML='ㅤ'};
// const elText = document.querySelector('.site__title');
// elText.innerHTML = (`${odam2}soat ${b}daqiqa`);
// const elTexta = document.querySelector('.site__title2');
// elTexta.innerHTML = (`${velik2}soat ${c}daqiqa`);
// const elTextb = document.querySelector('.site__title3');
// elTextb.innerHTML = (`${moshin2}soat ${d}daqiqa`);
// const elTextc = document.querySelector('.site__title4');
// elTextc.innerHTML = (`${samalyot2}soat ${e}daqiqa`);
// });

const elMins = document.querySelector('.minus');
const elSpan = document.querySelector('.span');
const elPlus = document.querySelector('.plus');

elMins.addEventListener('click',function(evt, b){
    evt.preventDefault();
    console.log(--elSpan.innerText);
});
elPlus.addEventListener('click',function(evt, a){
    evt.preventDefault();
    console.log(++elSpan.innerText);
});

// let n = prompt('Masofa qancha', 0);
// let santi =  n*100;
// let kilo = n/1000;
// let dits = n*10;
// const elTextr = document.querySelector('.site__text2');
// elTextr.innerHTML = (`${santi} santimeter`);
// const elTextah = document.querySelector('.site__text22');
// elTextah.innerHTML = (`${kilo} kilometer`);
// const elTextbc = document.querySelector('.site__text23');
// elTextbc.innerHTML = (`${dits} ditsmeter`);
// const elTextcd = document.querySelector('.site__text24');
// elTextcd.innerHTML = (`${n} meter`);