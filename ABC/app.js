let matem = +prompt("Matematika bali:", 0);
let english = +prompt("Ingliz tili bali:", 0);
let it = +prompt("IT bali:", 0);

let mathText = document.querySelector(".math-text");
let englishText = document.querySelector(".english-text");
let itText = document.querySelector(".it-text");
let text = document.querySelector(".text");

let son = 0 

if (matem>=80){
    son++;
}
if(english>=80){
    son++;
}
if(it>=80){
    son++;
}

mathText.innerHTML = 'Matematika bali:'+ matem
englishText.innerHTML = 'Ingliz tili bali:'+ english
itText.innerHTML = 'IT bali:'+ it

if(son==3){
    console.log('A sinfda oqiyman');
    text.innerHTML = 'A sinfda oqiyman'
}
else if(son==2){
    console.log('B sinfda oqiyman');
    text.innerHTML = 'B sinfda oqiyman'
}
else{
    console.log('C sinfda oqiyman');
    text.innerHTML = 'C sinfda oqiyman'
}