// Task 0
let getNumbers = (str) => str.match(/\d/g);

console.log(getNumbers(`n1um3ber95`));

// Task 1
function findTypes () {
    let types = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        isNaN(types[type]) ? types[type] = 1 : types[type] += 1;
    }
    return types;
}

console.log(findTypes(null, 6, `hello`, null, true));

// Task 2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { 
    console.log(el) 
});

// Task 3
function mapArray (arr, func) {
    let transArray = [];

    executeforEach(arr, function(data) {
        transArray.push(func(data));
    });

    return transArray;
}

console.log(mapArray([2, 5, 8], function(el) { 
    return el + 3 
}));

// Task 4
function filterArray (arr, func) {
    let filtArray = [];

    executeforEach(arr, function(data) {
        if (func(data)) {
            filtArray.push(data);
        }
    });

    return filtArray;
}

console.log(filterArray([2, 5, 8], function(el) { 
    return el > 3 
}));