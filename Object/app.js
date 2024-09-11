// let personData1 = {
//     fullName:{
//         firstName:'Ulugbek',
//         lastName:'Rustamov',
//     },
//     age:14,
//     height:170,
//     gender:'male',
//     nickname:'Ulug',
// };
// let personData2 = {
//     fullName:{
//         firstName:'Otabek',
//         lastName:'Davlatov',
//     },
//     age:13,
//     height:167,
//     gender:'male',
//     nickname:'Otash',
// };
// console.log(personData1.age - personData2.age);
// console.log(personData1.height - personData2.height);


// ----------------------------------------------UY ISHI----------------------------------------------
let obj1 = {
    ijobiy: +prompt('Ijobiy ovozlar soni', 0),
    salbiy: +prompt('Salbiy ovozlar soni', 1),
}
function func(obj) {
    if (obj.ijobiy > obj.salbiy) {
        return obj.ijobiy - obj.salbiy;
    }
    if (obj.salbiy > obj.ijobiy) {
        return obj.salbiy - obj.ijobiy;
    }
}
function func2(obj) {
    if (obj.salbiy > obj.ijobiy) {
        return obj.salbiy - obj.ijobiy;
    }
}
alert('Ijobiy ovozlar soni' + ' ' + func(obj1) + ' ' + 'taga kop')
alert('Salbiy ovozlar soni' + ' ' + func2(obj1) + ' ' + 'taga kop')





// let obj2 = {
//     boyi: +prompt('Boyi qancha', 0),
//     eni: +prompt('Eni qancha', 1),
//     balandligi: +prompt('Balandligi qancha', 2),
// }
// function func2(obj3) {
//     return obj3.boyi * obj3.eni * obj3.balandligi;
// }
// alert('Hajmi ' + ' ' + func2(obj2));