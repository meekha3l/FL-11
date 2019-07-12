function pipe (num) {
    if (arguments.length > 0) {
        for (let i = 1; i < arguments.length; i++) {
            num = arguments[i](num);
        }
    }
    return num;
}

function addOne(x) { 
    return x + 1;
}

console.log(pipe(3,addOne,addOne));