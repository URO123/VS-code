// function taqoslagich(num1, num2){
// if(num1>num2)return num1;
// else return num2;
// }
// let natija = taqoslagich(4,6);
// alert( natija);
// let natija2 = taqoslagich(7,2);
// alert( natija2);
// let natija3 = taqoslagich(3,8);
// alert( natija3);



//-------------------------------------------- uy ishi --------------------------------------------
// function doira(radius){
//     let a = (radius * radius * Math.PI).toFixed(2);
//     return a;
//             }

//             let natija = doira(5);
//             alert( natija);
//             let natija2 = doira(7);
//             alert( natija2);
//             let natija3 = doira(10);
//             alert( natija3);



function taqoslagich(num1, num2, num3) {
    if (num1 % 5 == 0 && num2 % 5 != 0 && num3 % 5 != 0) return 1;
    else if (num2 % 5 == 0 && num1 % 5 != 0 && num3 % 5 != 0) return 1;
    else if (num3 % 5 == 0 && num2 % 5 != 0 && num1 % 5 != 0) return 1;
    else if (num1 % 5 == 0 && num2 % 5 == 0 && num3 % 5 != 0) return 2;
    else if (num1 % 5 != 0 && num2 % 5 == 0 && num3 % 5 == 0) return 2;
    else if (num1 % 5 == 0 && num2 % 5 != 0 && num3 % 5 == 0) return 2;
    else if (num1 % 5 == 0 && num2 % 5 == 0 && num3 % 5 == 0) return 3;
    else return 0;
}
let natija = taqoslagich(15, 23, 5);
alert(natija);
let natija2 = taqoslagich(20, 2, 5);
alert(natija2);
let natija3 = taqoslagich(15, 80, 55);
alert(natija3);



// function son(num1){

//     let a = Math.floor(num1 / 10);
//     let c = num1 % 10;
//     return a + c;
//     }
//     let natija = son(46);
//     alert( natija);
//     let natija2 = son(72);
//     alert( natija2);
//     let natija3 = son(38);
//     alert( natija3);




