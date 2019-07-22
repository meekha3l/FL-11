let rootNode = document.getElementById('root');

let addBtn = document.querySelector('#todoAdd button');
let addField = document.querySelector('#todoAdd input');
let todoList = document.getElementById(`todoList`);
let form = document.querySelector(`form`);
let itemNum = 0;
let itemsAmount = [];
const MAX_ITEMS = 10;

addBtn.addEventListener(`click`, () => {
    addItem(addField.value);
    addField.value = '';
}, false);

addField.addEventListener(`keyup`, function(e) {
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
        let itemId = `item-${itemNum++}`;
        let btnEdit = document.createElement(`button`);
        let btnDel = document.createElement(`button`);
    
        checkbox.type = `checkbox`;
        checkbox.id = itemId;

        btnEdit.classList.add(`material-icons`, `btn-edit`);
        btnEdit.type = `button`;
        btnEdit.innerHTML = `edit`;

        btnDel.classList.add(`material-icons`, `btn-del`);
        btnDel.type = `button`;
        btnDel.innerHTML = `delete`;        

        label.setAttribute(`for`, itemId);
        label.innerHTML = value + btnEdit.outerHTML + btnDel.outerHTML;

        fieldset.innerHTML += checkbox.outerHTML + label.outerHTML;
    
        todoList.appendChild(fieldset);
        itemsAmount = todoList.getElementsByTagName(`fieldset`);
        listenerItems();
    } else {
        console.log(`full`);
    }

}

function listenerItems() {
    let btnsEdit = todoList.querySelectorAll(`.btn-edit`);
    let btnsDel = todoList.querySelectorAll(`.btn-del`);
    console.log(btnsDel);
    for (let i = 0; i < btnsEdit.length; i++) {
        btnsEdit[i].addEventListener(`click`, editItem, false);
        btnsEdit[i].nextElementSibling.addEventListener(`click`, delItem, false);
    }
}

function editItem() {
    let inputText = document.createElement(`input`);
    let btnSave = document.createElement(`button`);
    let text = this.previousSibling.textContent;
    let fieldset = this.parentElement.parentElement;
    let label = this.parentElement;

    btnSave.classList.add(`material-icons`, `btn-edit`);
    btnSave.type = `button`;
    btnSave.innerHTML = `save`;

    inputText.type = `text`;
    inputText.value = text;

    fieldset.appendChild(inputText);
    fieldset.appendChild(btnSave);
    console.log(this.previousSibling.textContent);

    btnSave.addEventListener(`click`, () => {
        changeItem(inputText.value);
    }, false);

    function changeItem(value) {
        console.log(label);
        label.innerHTML = 'gg';
        console.log(`done`);
    }
}

function delItem() {
    this.parentElement.parentElement.remove();
}

// onkeypress="return event.keyCode != 13"