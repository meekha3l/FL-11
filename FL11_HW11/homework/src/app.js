let rootNode = document.getElementById('root');

let addBtn = document.querySelector('#todoAdd button');
let addField = document.querySelector('#todoAdd input');
let todoList = document.getElementById(`todoList`);
let form = document.querySelector(`form`);
let itemNum = 0;
let itemsAmount = [];
const MAX_ITEMS = 10;

console.log(form);

addBtn.addEventListener('click', () => {
    addItem(addField.value);
    addField.value = '';
}, false);

form.addEventListener(`keyup`, function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
    }
  });

addField.addEventListener(`keyup`, function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        e.preventDefault();
        addBtn.click();
    }
});

function addItem(value) {

    if (itemsAmount.length < MAX_ITEMS) {
        let fieldset = document.createElement(`fieldset`);
        let checkbox = document.createElement(`input`);
        let label = document.createElement(`label`);
        let span = document.createElement(`span`);
        let itemId = `item-${itemNum++}`;
    
        checkbox.type = `checkbox`;
        checkbox.id = itemId;
        label.setAttribute(`for`, itemId);
        label.innerHTML = value + span.outerHTML;
        fieldset.innerHTML += checkbox.outerHTML + label.outerHTML;
    
        todoList.appendChild(fieldset);
        itemsAmount = todoList.getElementsByTagName(`fieldset`);
    } else {
        console.log(`full`);
    }

    // console.log(todoList.getElementsByTagName(`fieldset`).length);

} 

// let todoList = document.getElementById(`todoList`);

// document.getElementById('addItem').addEventListener('click', () => {addIthem(document.getElementById('dataItem').value)}, false);
// let testClass = 0;
// function addIthem(sometext) {
//     let newItem = document.createElement('p');
//     newItem.classList.add(testClass++);
//     newItem.innerHTML = document.getElementById('dataItem').value;
//     console.log(document.getElementById('dataItem').value);
//     console.log(sometext);
//     todoList.appendChild(newItem);

//     let p = document.getElementsByTagName('p');
//     for (let i = 0; i < p.length; i++) {
//         p[i].addEventListener('click', someFunc);
//         console.log(p[i]);
//     }
// }

// function someFunc() {
//     console.log(this);
// }

// let pTag = document.createElement('p');
// pTag.classList.add('asd');
// let divTag = document.createElement('div');
// let spanTag = document.createElement('span');
// divTag.innerHTML += pTag.outerHTML + spanTag.outerHTML;
// console.log(divTag);

// console.log(document.querySelector('#todoAdd input'));
// console.log(document.querySelector('#todoAdd button'));