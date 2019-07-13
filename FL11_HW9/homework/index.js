let getNumbers = (str) => str.match(/\d/g);

console.log(getNumbers(`n1um3ber95`));

function findTypes () {
    let types = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        isNaN(types[type]) ? types[type] = 1 : types[type] += 1;
    }
    return types;
}

console.log(findTypes(null, 6, `hello`, null, true));

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { 
    console.log(el) 
});