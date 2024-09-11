// for (let i = 2; i <= 20; i += 2){
//     console.log(i);
// }

// let number = ['d',2,3,4,'h',5,6,7]

// function func(arr) {
//     let element = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         element.push(arr[i]);
//     }
//     return element;
// }

// console.log(func(number));

// let arr2 = [2, 4, 6, 8, 10];
// let num2 = 8;

// function iArray(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(iArray(arr2, num2));

// -----------------------------------BIRINCHI TOPSHIRIQ-----------------------------------
// let arr2 = ["a", 5, "bad", "good", 7, 8, "well"];

// function countString(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if ((typeof arr[i]) === "string"){
//             sum++
//         }
//     }
//     return sum;
// }

// console.log(countString(arr2));

// -----------------------------------IKINCHI TOPSHIRIQ-----------------------------------
// let arr2 = ["a", "bad", "good","well"];

// function countString(arr) {
//     let str = ""
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i].length > str.length){
//         str = arr[i];
//         }
//     }
//     return str;
// }

// console.log(countString(arr2));

// -----------------------------------UCHINCHI TOPSHIRIQ-----------------------------------

// let arr2 = [5,0,-1,0,-6, 6];

// function bckNull(arr) {
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] == 0){
//             str.push(arr[i]);
//         }
//         if ( arr[i] > 0){
//             str.unshift(arr[i]);
//         }
//         if ( arr[i] < 0){
//             str.unshift(arr[i]);
//         }
//     }
//     return str;
// }

// console.log(bckNull(arr2));


// -----------------------------------------UY ISHI-----------------------------------------
// let arr2 = [1, 2, "null", []];

// function arrayValuesTypes(arr) {
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] = (typeof arr[i])){
//             str.push(arr[i]);
//         }
//     }
//     return str;
// }

// console.log(arrayValuesTypes(arr2));

// ---------------------------------------2-uy ishi---------------------------------------

// let arr2 = [1, 2, "a", "b"];

// function parseArray(arr) {
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] = (String(arr[i]))){
//             str.push(arr[i]);
//         }
//     }
//     return str;
// }

// console.log(parseArray(arr2));


// ---------------------------------------3-uy ishi---------------------------------------

// let arr2 = [2, 5, 3];

// function getMultipliedArr(arr) {
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] = ((arr[i])*2)){
//             str.push(arr[i]);
//         }
//     }
//     return str;
// }

// console.log(getMultipliedArr(arr2));




// /////////////////////////////////////////////////////////////////

// let array = +prompt('son kiriting', 0);

// let sum1 = ((el) => {
//   if(el % 5 == 0){
//     alert('Fizz');
//   }
//   if(el % 7 == 0){
//     alert('Buzz');
//   }
//   if(el % 7 == 0 && el % 5 == 0){
//     alert('FizzBuzz');
//   }
//   if(el % 7 != 0 && el % 5 != 0){
//     alert('bu sonlar bo`linmaydi hech 7 ga ham 5 ga ham');
//   }
//   return el;
// });
// console.log((sum1(array)));

// let a = +prompt('Sonni kirit');
// let firstLetter = Math.floor(a / 100);
// let secondLetter = Math.floor(a / 10) % 10;
// let thirdLetter = a % 10;
// alert(firstLetter + secondLetter + thirdLetter);

