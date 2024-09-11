// let a = +prompt('1-Sonni kirit' , 0);
// let b = +prompt('2-Sonni kirit' , 1);
// let c = +prompt('3-Sonni kirit' , 2);
// let d = +prompt('4-Sonni kirit' , 3);

// if(a>c&&a>b&&a>d){
//     alert(`${a}-soni eng katta`);
// }
// else if(b>c&&b>a&&b>d){
//     alert(`${b}-soni eng katta`);
// }
// else if(c>a&&c>b&&c>d){
//     alert(`${c}-soni eng katta`);
// }
// else if(d>a&&d>b&&d>c){
//     alert(`${d}-soni eng katta`);
// }



let a = +prompt("sonni kiring");

let c = a / 10;
let b = Math.floor(c);
let e = a % 10;
let g = +(e.toFixed(0))

alert(b + g)
// if ( a == 2 && !isNaN(a)) {

//     let b = parseInt(a.toFixed());
//     let c = parseInt(a.toFixed(1));
    

//     let d = b + c;

//     alert("Javob " + d);
// } else {
//     alert("javob yo`q");
// }