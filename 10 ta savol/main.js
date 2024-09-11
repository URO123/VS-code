let a = +prompt('1-Sonni kirit' , 0);
let b = +prompt('2-Sonni kirit' , 1);
let c = +prompt('3-Sonni kirit' , 2);

if(a < b && a > c){
    alert(`${a}-soni o'rtanchasi`);
}
else if(a > b && a < c){
    alert(`${a}-soni o'rtanchasi`);
}
else if(b > a && b < c){
    alert(`${b}-soni o'rtanchasi`);
}
else if(b < a && b > c){
    alert(`${b}-soni o'rtanchasi`);
}
else if(c < a && c > b){
    alert(`${c}-soni o'rtanchasi`);
}
else if(c > a && c < b){
    alert(`${c}-soni o'rtanchasi`);
}



// let a = +prompt('1-Sonni kirit' , 0);
// let b = +prompt('2-Sonni kirit' , 1);
// let c = +prompt('3-Sonni kirit' , 2);
// let d = +prompt('4-Sonni kirit' , 3);

// if(a != b && a != c && a != d&& b==c==d){
//     alert(`1-son boshqacha`);
// }
// else if(a != d && a == c && a == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(a == d && a == c && a != b){
//     alert(`2-tasi boshqacha`);
// }
// else if(a == d && a != c && a == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(b != a && b != c && b != d&&a==c==d){
//     alert(`2-son boshqacha`);
// }
// else if(b != a && b == c && b == d){
//     alert(`2-tasi boshqacha`);
// }
// else if(b == a && b == c && b != d){
//     alert(`2-tasi boshqacha`);
// }
// else if(b == a && b != c && b == d){
//     alert(`2-tasi boshqacha`);
// }
// else if(c != a && c != b && c != d&&b==a==d){
//     alert(`3-son boshqacha`);
// }
// else if(c != a && c == d && c == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(c == a && c == d && c != b){
//     alert(`2-tasi boshqacha`);
// }
// else if(c == a && c != d && c == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(d != a && d != c && d != b && b==c==a){
//     alert(`4-son boshqacha`);
// }
// else if(d != a && d == c && d == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(d == a && d == c && d != b){
//     alert(`2-tasi boshqacha`);
// }
// else if(d == a && d != c && d == b){
//     alert(`2-tasi boshqacha`);
// }
// else if(a != b && a != c && a != d && b != a && b != c && b != d && c != a && c != b && c != d &&d != a && d != c && d != b){
//     alert(`4-talasi har xil`);
// }



// let a = Math.round(Math.random()*999)
// if (a < 100) {
//     alert(bu ${a} 2 xonali son)
// }
// else if (a > 100){
//     alert(bu ${a} 3 xonali son)
// }