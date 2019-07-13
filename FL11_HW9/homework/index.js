// Task 0
let getNumbers = (str) => str.match(/\d/g);

console.log(getNumbers(`n1um3ber95`));

// Task 01
function findTypes () {
    let types = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        isNaN(types[type]) ? types[type] = 1 : types[type] += 1;
    }
    return types;
}

console.log(findTypes(null, 6, `hello`, null, true));

// Task 02
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { 
    console.log(el) 
});

// Task 03
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

// Task 04
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

//Task 05
function showFormattedDate (data) {
    return 'Date: ' + data.toString().substr(4, 11);
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//Task 06
function canConvertToDate (date) {
    return !isNaN(new Date(date));
}

console.log(canConvertToDate(`2016-13-18T00:00:00`));
console.log(canConvertToDate(`2016-03-18T00:00:00`));

//Task 07
function daysBetween(date1, date2) {
    let msPerDay = 1000 * 60 * 60 * 24;
    let utcDate1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let utcDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor((utcDate2 - utcDate1) / msPerDay);
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));