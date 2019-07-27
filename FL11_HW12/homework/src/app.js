const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

// Your code goes here
let locHash = location.hash;
let idTask = getMaxId();

if (!locHash) {
    location.hash = '/list';
}

const eng = {
    mainHeader: `Simple TODO application`,
    addOpenBtn: `Add new task`,
    addHeader: `Add new task`,
    btnCancel: `Cancel`,
    existError: `Error! You can't add already exist item`,
    editError: `Error! You can't edit already done item`
};

window.addEventListener(`hashchange`, hashListener);

function hashListener() {
    locHash = location.hash;
    console.log(locHash);
    switch (locHash) {
        case `#/list`:
            homePage();
            break;
        case `#/add`:
            addPage();
            break;
        default:
            break;
    }
}

function homePage() {
    console.log(`is home`);
    removeWrap();

    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let btn = document.createElement(`button`);
    let ul = document.createElement(`ul`);
    let wrap = document.createElement(`div`);

    wrap.classList.add(`wrap`);

    h2.innerHTML = eng.mainHeader;
    header.innerHTML = h2.outerHTML;

    btn.innerHTML = eng.addOpenBtn;
    btn.type = `button`;

    rootNode.appendChild(wrap);
    wrap.appendChild(header);
    wrap.appendChild(btn);
    wrap.appendChild(ul);

    btn.addEventListener(`click`, () => {
        location.hash = '/add';
    });

    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        let localItem = localStorage.getItem(keys[i]);
        let task = getTasks(JSON.parse(localItem));
        taskListener(task);
        ul.appendChild(task);
    }    

}

function addPage() {
    console.log(`is add page`);
    removeWrap();

    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let input = document.createElement(`input`);
    let btnSave = document.createElement(`button`);
    let btnCancel = document.createElement(`button`);
    let wrap = document.createElement(`div`);

    h2.innerHTML = eng.addHeader;
    header.appendChild(h2);

    input.type = `text`;

    btnSave.type = `button`;
    btnSave.innerHTML = eng.addOpenBtn;
    btnSave.addEventListener(`click`, () => {
        if (input.value) {
            addTask(false, ++idTask, input.value);
        }
    })

    btnCancel.type = `button`;
    btnCancel.innerHTML = eng.btnCancel;
    btnCancel.addEventListener(`click`, () => {
        location.hash = `/list`;
    });

    wrap.classList.add(`wrap`);

    rootNode.appendChild(wrap);
    wrap.appendChild(header);
    wrap.appendChild(input);
    wrap.appendChild(btnSave);
    wrap.appendChild(btnCancel);
}

function getTasks(data) {
    let li = document.createElement(`li`);
    let input = document.createElement(`input`);
    let checkmark = document.createElement(`label`);
    let description = document.createElement(`span`);
    let btnDel = document.createElement(`button`);

    input.type = `checkbox`;
    input.id = `checkbox-${data.id}`;
    if (data.isDone) {
        input.setAttribute(`checked`, `checked`);
        input.setAttribute(`disabled`, `disabled`);
        li.classList.add(`task-checked`);
    }

    checkmark.classList.add(`checkmark`);
    checkmark.setAttribute(`for`, `checkbox-${data.id}`);

    description.classList.add(`task-name`);
    description.innerHTML = data.description;

    btnDel.classList.add(`del-btn`);

    li.classList.add(`task`);
    li.id = `task-${data.id}`
    li.innerHTML = input.outerHTML + checkmark.outerHTML + description.outerHTML + btnDel.outerHTML;

    return li;
}

function addTask(isDone, id, description) {
    let task = {};
    task.isDone = isDone;
    task.id = id;
    task.description = description;
    localStorage.setItem(`id${id}`, JSON.stringify(task));
    location.hash = '/list';
}

function taskListener(item) {
    let checkbox = item.querySelector(`input`);
    let text = item.querySelector(`span`);
    let btnDel = item.querySelector(`button`);
    
    console.log(text);
    btnDel.addEventListener(`click`, removeTask);
    checkbox.addEventListener(`click`, checkStatus);
}

function checkStatus() {
    let task = this.parentElement;
    let thisId = Math.floor(task.id.match(/\d+$/)[0]);

    let taskData = JSON.parse(localStorage.getItem(`id${thisId}`));
    taskData.isDone = true;

    this.setAttribute(`disabled`, `disabled`); 
    task.classList.add(`task-checked`);
    localStorage.setItem(`id${thisId}`, JSON.stringify(taskData));
}

function removeTask() {
    let task = this.parentElement;
    let thisId = getTaskId(task.id);
    localStorage.removeItem(`id${thisId}`);
    task.remove();
    console.log();
}

function removeWrap() {
    let rootNodeWrap = rootNode.querySelector(`.wrap`);
    if (rootNodeWrap) {
        rootNodeWrap.remove();
    }   
}

function getMaxId() {
    let keys = Object.keys(localStorage);
    let maxId = 0;

    for (let i = 0; i < keys.length; i++) {
        let localItem = localStorage.getItem(keys[i]);
        let task = JSON.parse(localItem);
        let taskId = Math.floor(task.id);
        if (taskId > maxId) {
            maxId = taskId;
        }
    }

    return maxId;    
}

function getTaskId(id) {
    return Math.floor(id.match(/\d+$/)[0]);
}

hashListener();

// hamePage();

// function createElements(obj) {
//     let elements = {};
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     for (let i = 0; i < keys.length; i++) {
//         elements[keys[i]] = document.createElement(values[i]);
//     }
//     return elements;
// }

// function allStorage() {

//     let values = [];
//     let keys = Object.keys(localStorage);

//     for (let i = 0; i < keys.length; i++) {
//         let localItem = localStorage.getItem(keys[i]);
//         values.push(JSON.parse(localItem));
//     }

//     return values;
// }

// rootNode.appendChild(/* Append your list item node*/);
