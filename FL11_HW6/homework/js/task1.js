let a1 = +prompt('Enter a1', 0);
let a2 = +prompt('Enter a2', 0);
let b1 = +prompt('Enter b1', 0);
let b2 = +prompt('Enter b2', 0);
let c1 = +prompt('Enter c1', 0);
let c2 = +prompt('Enter c2', 0);

const DIV_BY_HALF = 2

let midDistance1 = (a1+b1) / DIV_BY_HALF;
let midDistance2 = (a2+b2) / DIV_BY_HALF;

if (midDistance1 === c1 && midDistance2 === c2) {
    console.log(true);
} else {
    console.log(false);
}