// let arr = [45, '90', true, false, 13];
// let sum = arr.reduce((total, el) => {
//     if (typeof el === 'number'){
//         return total + el;
//     }
//     else return total;
// }, 0);

// console.log(sum);

let arr = [45, '90', true, false, 13];
let sum = arr.reduce((total, el) => {
    total.push(typeof el);
    return total
}, []);

console.log(sum);

let array = [56, 89, 9, 12, 6, 13, 90, 632];

let sum1 = array.reduce((total, el) => {
  if(el % 2 == 0){
    total.push(el)
  }
  return total
}, []);
console.log(sum1);
