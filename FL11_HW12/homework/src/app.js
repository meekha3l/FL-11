const rootNode = document.getElementById('root');

let locHash = location.hash;
let newId = getMaxId();

if (!locHash) {
    location.hash = '/list';
}

const eng = {
    mainHeader: `Simple TODO application`,
    addBtn: `Add new task`,
    addHeader: `Add new task`,
    editHeader: `Modify task`,
    editBtn: `Save changes`,
    btnCancel: `Cancel`,
    existError: `Error! You can't add already exist item and empty item`,
    editError: `Error! You can't edit already done item`,
    pageError: `Page Not Found`
};

window.addEventListener(`hashchange`, hashListener);

// Listen HASH
function hashListener() {
    locHash = location.hash;

    if (locHash.includes(`modify`)) {
        locHash = `#/modify`;
    }

    switch (locHash) {
        case `#/list`:
            homePage();
            break;
        case `#/add`:
            addPage(true);
            break;
        case `#/modify`:
            addPage(false);
            break;
        default:
            location.hash = `#/list`
            errorAlert(eng.pageError);
            break;
    }
}

// Generate Home page
function homePage() {
    removeWrap();

    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let btn = document.createElement(`button`);
    let ul = document.createElement(`ul`);
    let wrap = document.createElement(`div`);

    wrap.classList.add(`wrap`);

    h2.innerHTML = eng.mainHeader;
    header.innerHTML = h2.outerHTML;

    btn.innerHTML = eng.addBtn;
    btn.type = `button`;
    btn.classList.add(`btn`);

    rootNode.appendChild(wrap);
    wrap.appendChild(header);
    wrap.appendChild(btn);
    wrap.appendChild(ul);

    btn.addEventListener(`click`, () => {
        location.hash = '/add';
    });
    
    let allTasks = getTasksData();
    allTasks.forEach(el => {
        let taskItem = getTasks(el);
        taskListener(taskItem);
        ul.appendChild(taskItem);        
    });

}

// Generate Add and Modify page
function addPage(newTask = true) {
    removeWrap();

    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let input = document.createElement(`input`);
    let btnSave = document.createElement(`button`);
    let btnCancel = document.createElement(`button`);
    let wrapBtn = document.createElement(`div`);
    let wrap = document.createElement(`div`);

    header.appendChild(h2);
    input.type = `text`;
    btnSave.type = `button`;
    btnSave.classList.add(`btn`);

    btnCancel.type = `button`;
    btnCancel.innerHTML = eng.btnCancel;
    btnCancel.classList.add(`btn`);
    btnCancel.addEventListener(`click`, () => {
        location.hash = `/list`;
    });

    wrap.classList.add(`wrap`);
    wrapBtn.classList.add(`wrap-btn`);

    if(newTask) {
        h2.innerHTML = eng.addHeader;

        btnSave.innerHTML = eng.addBtn;
        btnSave.addEventListener(`click`, () => {
            if (!findTaskDesc(input.value) && input.value) {
                addTask(false, newId(), input.value);
            } else {
                errorAlert(eng.existError);
            }
        });
    } else {
        let idTask = getTaskId(location.hash);
        let taskData = getTaskDataById(idTask);

        if (!taskData.isDone) {
            h2.innerHTML = eng.editHeader;
            input.value = taskData.description;
    
            btnSave.innerHTML = eng.editBtn;
            btnSave.addEventListener(`click`, editTask);
        } else {
            location.hash = '/list';
            errorAlert(eng.editError);
        }
    }

    wrapBtn.appendChild(btnSave);
    wrapBtn.appendChild(btnCancel);
    wrap.appendChild(header);
    wrap.appendChild(input);
    wrap.appendChild(wrapBtn);
    rootNode.appendChild(wrap);
}

// Generate all tasks
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

// Set new task in localStorage
function addTask(isDone, id, description) {
    let task = {};
    task.isDone = isDone;
    task.id = id;
    task.description = description;
    localStorage.setItem(`id${id}`, JSON.stringify(task));
    location.hash = '/list';
}

// Listen task items
function taskListener(item) {
    let checkbox = item.querySelector(`input`);
    let text = item.querySelector(`span`);
    let btnDel = item.querySelector(`button`);
    
    text.addEventListener(`click`, () => {
        let taskItem = text.parentElement;
        let thisId = getTaskId(taskItem.id);        
        location.hash = `#/modify/${thisId}`;
    });
    btnDel.addEventListener(`click`, removeTask);
    checkbox.addEventListener(`click`, checkStatus);
}

// Check and change Checkbox status
function checkStatus() {
    let taskItem = this.parentElement;
    let thisId = getTaskId(taskItem.id);

    let taskData = getTaskDataById(thisId);
    if (taskData.isDone) {
        taskData.isDone = false;
        taskItem.classList.remove(`task-checked`);
    } else {
        taskData.isDone = true;
        taskItem.classList.add(`task-checked`);
    }

    localStorage.setItem(`id${thisId}`, JSON.stringify(taskData));
}

// Set modify task in localStorage
function editTask() {
    let input = this.parentElement.parentElement.querySelector(`input[type=text]`);
    let inputValue = input.value;
    let taskId = getTaskId(location.hash);
    let taskData = getTaskDataById(taskId);

    if (!findTaskDesc(inputValue) && inputValue || inputValue === taskData.description) {
        let idTask = getTaskId(location.hash);
        let taskData = getTaskDataById(idTask);
        taskData.description = inputValue;
        
        localStorage.setItem(`id${idTask}`, JSON.stringify(taskData));
        location.hash = '/list';
    } else {
        errorAlert(eng.existError);
    }
}

// Remove task from localStorage
function removeTask() {
    let task = this.parentElement;
    let thisId = getTaskId(task.id);
    localStorage.removeItem(`id${thisId}`);
    task.remove();
}

// Clearing а page
function removeWrap() {
    let rootNodeWrap = rootNode.querySelector(`.wrap`);
    if (rootNodeWrap) {
        rootNodeWrap.remove();
    }   
}

// Get Max ID (closure)
function getMaxId() {

    let tasksData = getTasksData();
    let maxId = 0;
    tasksData.forEach(el => {
        if (el.id > maxId) {
            maxId = el.id;
        }
    });

    function newId(currentID = false) {
        return currentID ? maxId : ++maxId;
    }

    return newId;
}

// Get ID from string
function getTaskId(id) {
    return Math.floor(id.match(/\d+$/)[0]);
}

// Get all tasks from localStorage (array)
function getTasksData() {

    let values = [];
    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        let localItem = localStorage.getItem(keys[i]);
        values.push(JSON.parse(localItem));
    }

    return values;
}

// Get task data by ID (obj) 
function getTaskDataById(id) {
    let dataLS = localStorage.getItem(`id${id}`);
    let task = JSON.parse(dataLS);
    return task;
}

// A check for existence of the Description
function findTaskDesc(description) {
    let taskData = getTasksData();
    return taskData.some( function(el) {
        return el.description === description;
    });
}

// Generate Alert container
function errorAlert(desc) {
    let div = document.createElement(`div`);
    let p = document.createElement(`p`);
    let btnClose = document.createElement(`span`);
    const ERROR_TIME = 3000;

    div.classList.add(`alert-block`);
    p.innerHTML = desc;

    div.appendChild(p);
    div.appendChild(btnClose);
    rootNode.appendChild(div);

    let timeToRemove = setTimeout(() => {
        div.remove();
    }, ERROR_TIME);

    btnClose.addEventListener(`click`, () => {
        clearTimeout(timeToRemove);
        div.remove();
    });
}

hashListener();