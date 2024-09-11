const elForm = document.querySelector('.form')
const elInput1 = document.querySelector('.input-1')
const elStatus = document.querySelector('.status1')
const elInput2 = document.querySelector('.input-2')
const elStatus2 = document.querySelector('.status2')
const elInput3 = document.querySelector('.input-3')
const elStatus3 = document.querySelector('.status3')
const elInput4 = document.querySelector('.input-4')
const elStatus4 = document.querySelector('.status4')
const elInput5 = document.querySelector('.input-5')
const elStatus5 = document.querySelector('.status5')
const elInput6 = document.querySelector('.input-6')
const elStatus6 = document.querySelector('.status6')

elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (elInput1.value.trim().length <= 3) {
        elStatus.innerHTML = 'Noob!'
        elStatus.style.color = 'red'
        elInput1.classList.add('red')
    }
    if (elInput2.value.trim().length <= 3) {
        elStatus2.innerHTML = 'Noob!'
        elStatus2.style.color = 'red'
        elInput2.classList.add('red')
    }
    else{
        elStatus2.innerHTML = 'Good job!'
        elStatus2.style.color = 'green'
        elInput2.classList.add('green')
    }
    if (elInput3.value.trim().length <= 3) {
        elStatus3.innerHTML = 'Noob!'
        elStatus3.style.color = 'red'
        elInput3.classList.add('red')
    }
    if (elInput4.value.trim().length <= 3) {
        elStatus4.innerHTML = 'Noob!'
        elStatus4.style.color = 'red'
        elInput4.classList.add('red')
    }
    if (elInput5.value.trim().length <= 3) {
        elStatus5.innerHTML = 'Noob!'
        elStatus5.style.color = 'red'
        elInput5.classList.add('red')
    }
    if (elInput6.value.trim().length <= 3) {
        elStatus6.innerHTML = 'Noob!'
        elStatus6.style.color = 'red'
        elInput6.classList.add('red')
    }

});