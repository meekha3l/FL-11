let rootNode = document.getElementById('root');

let addBtn = document.querySelector('#todoAdd button');
let addField = document.querySelector('#todoAdd input');
let todoList = document.getElementById(`todoList`);
let form = document.querySelector(`form`);
let itemNum = 0;
let itemsAmount = [];
const MAX_ITEMS = 10;
const KEY_ENT = 13;

addBtn.addEventListener(`click`, () => {
    addItem(addField.value);
    addField.value = '';
}, false);

addField.addEventListener(`keyup`, function(e) {
    if (e.keyCode === KEY_ENT) {
        e.preventDefault();
        addBtn.click();
    }
});

function addItem(value) {

    if (itemsAmount.length < MAX_ITEMS) {
        let fieldset = document.createElement(`div`);
        let checkbox = document.createElement(`input`);
        let label = document.createElement(`label`);
        let btnEdit = document.createElement(`button`);
        let btnDel = document.createElement(`button`);
        let itemId = `item-${itemNum++}`;
    
        checkbox.type = `checkbox`;
        checkbox.id = itemId;
        checkbox.classList.add(`material-icons`, `checkmark`);

        btnEdit.classList.add(`material-icons`, `btn-edit`);
        btnEdit.type = `button`;
        btnEdit.innerHTML = `edit`;

        btnDel.classList.add(`material-icons`, `btn-del`);
        btnDel.type = `button`;
        btnDel.innerHTML = `delete`;        

        label.setAttribute(`for`, itemId);
        label.innerHTML = value;

        fieldset.classList.add(`item`);
        fieldset.innerHTML += checkbox.outerHTML + label.outerHTML + btnEdit.outerHTML + btnDel.outerHTML;
    
        todoList.appendChild(fieldset);
        itemsAmount = todoList.getElementsByTagName(`div`);
        listenerItems();

    } else {
        console.log(`full`);
    }

}

function listenerItems() {
    let btnsEdit = todoList.querySelectorAll(`.btn-edit`);
    let btnsDel = todoList.querySelectorAll(`.btn-del`);
    let checkboxes = todoList.querySelectorAll(`.checkmark`);

    for (let i = 0; i < btnsEdit.length; i++) {
        btnsEdit[i].addEventListener(`click`, editItem, false);
        btnsDel[i].addEventListener(`click`, delItem, false);
        checkboxes[i].addEventListener(`click`, disableItem, false);
    }
}

function editItem() {
    let inputText = document.createElement(`input`);
    let btnSave = document.createElement(`button`);
    let wrapFieldset = document.createElement(`div`);
    let mainFieldset = this.parentElement;
    let mainElements = mainFieldset.children;
    let label = mainFieldset.querySelector(`label`);

    btnSave.classList.add(`material-icons`, `btn-edit`);
    btnSave.type = `button`;
    btnSave.innerHTML = `save`;

    inputText.classList.add(`item-input`);
    inputText.type = `text`;
    inputText.value = label.textContent;

    changeClasses(mainElements, `hide`, false);

    mainFieldset.appendChild(wrapFieldset);
    wrapFieldset.appendChild(inputText);
    wrapFieldset.appendChild(btnSave);


    btnSave.addEventListener(`click`, () => {
        changeItem(inputText.value);
    }, false);

    function changeItem(value) {
        label.innerHTML = value;
        changeClasses(mainElements, `hide`, true);
        wrapFieldset.remove();
    }
}

function delItem() {
    this.parentElement.remove();
}

function disableItem() {
    this.setAttribute(`disabled`, `disabled`);
    this.parentElement.querySelector(`.btn-edit`).setAttribute(`disabled`, `disabled`);
}

function changeClasses (data, className, removeClasses = false) {
    for (let i = 0; i < data.length; i++) {
        removeClasses ? data[i].classList.remove(className) : data[i].classList.add(className);
    }
}

// onkeypress="return event.keyCode != 13"