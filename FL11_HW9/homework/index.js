// Task 0
function getNumbers(str) {
    let numbers = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numbers.push(str[i]);
        }
    }
    return numbers;
}

console.log(getNumbers(`n1um3ber95`));

// Task 01
function findTypes() {
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
function mapArray(arr, func) {
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
function filterArray(arr, func) {
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
function showFormattedDate(date) {
    let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${monthList[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//Task 06
function canConvertToDate(date) {
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

//Task 08
function getAmountOfAdultPeople(data) {
    let agePeople = [];

    for (let i = 0; i < data.length; i++) {
        let days = daysBetween(new Date(data[i]['birthday']), new Date());
        let leapDays = days / 4;
        let comDays = days - leapDays;
        let leapYears = leapDays / 366;
        let comYears = comDays / 365;
        let years = Math.floor(leapYears + comYears);
        agePeople.push(years);
    }

    let amAdult = filterArray(agePeople, function (el) {
        return el >= 18;
    });

    return amAdult.length;
}

let people = [ 
    {  
        '_id': '5b5e3168c6bf40f2c1235cd6', 
        'index': 0, 
        'birthday': '2016-03-18T00:00:00', 
        'eyeColor': 'green', 
        'name': 'Stein', 
        'favoriteFruit': 'apple' 
    },  
    { 
        '_id': '5b5e3168e328c0d72e4f27d8', 
        'index': 1, 
        'birthday': '1991-02-11T00:00:00', 
        'eyeColor': 'blue', 
        'name': 'Cortez', 
        'favoriteFruit': 'strawberry' 
    }, 
    { 
        '_id': '5b5e3168cc79132b631c666a', 
        'index': 2, 
        'birthday': '1984-04-17T00:00:00', 
        'eyeColor': 'blue', 
        'name': 'Suzette', 
        'favoriteFruit': 'apple' 
    }, 
    {
        '_id': '5b5e31682093adcc6cd0dde5', 
        'index': 3, 
        'birthday': '1994-04-17T00:00:00', 
        'eyeColor': 'green', 
        'name': 'George', 
        'favoriteFruit': 'banana' 
    }
];

console.log(getAmountOfAdultPeople(people));

//Task 09
function keys(data) {
    let allKeys = []
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            allKeys.push(key);
        }
    }
    return allKeys;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 10
function values(data) {
    let allValues = []
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            allValues.push(data[key]);
        }
    }
    return allValues;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));