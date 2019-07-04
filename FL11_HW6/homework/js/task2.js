let a = +prompt('Enter a', 0);
let b = +prompt('Enter b', 0);
let c = +prompt('Enter c', 0);

if (!(a+b>c && b+c>a && c+a>b)) {
    console.log('Triangle doesn’t exist'); 
} else if(a===b && a===c) {
    console.log('Equivalent triangle');
} else if(a===b && a!==c || b===c && b!==a || a===c && a!==b) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}