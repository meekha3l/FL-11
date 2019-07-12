function getMin () {
    let minNum = arguments[0];
    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
            if (minNum > arguments[i]) {
                minNum = arguments[i]
            }
        }
    }
    return minNum;
}

console.log(getMin(3,0,-3));