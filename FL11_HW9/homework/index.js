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

console.log(findTypes(null, `hello`, null, true));