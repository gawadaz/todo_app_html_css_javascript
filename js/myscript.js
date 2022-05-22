function print_hello_msg() {
    console.log("hello from app!!");
}

const arr = [];

function addTask() {
    const task = document.getElementById("new-task").value
    console.log(task);
    arr.push(task);
    console.log(arr);
    refreshTasksList();
}

function refreshTasksList() {
    document.getElementById("tasks").innerHTML = ''
    for(let i=0; i<arr.length; i++) {
        const newTask = createTaskEle(arr[i], i);
        console.log(arr)
        document.getElementById("tasks").appendChild(newTask);
    }
}

function clearAllTasks() {
    arr.splice(0, arr.length);
    refreshTasksList();
}

function createTaskEle(task, index) {
    const span = document.createElement('span');
    span.innerText = task;
    const button = document.createElement('button');
    button.setAttribute("class", "btn btn-delete");
    button.onclick = () => deleteTask(index);
    button.innerText = 'Delete';
    const newTask = document.createElement('div');
    newTask.setAttribute("id", index.toString())
    newTask.setAttribute("class", "task");
    newTask.appendChild(span);
    newTask.appendChild(button);
    return newTask;
}

function deleteTask(index) {
    arr.splice(index, 1);
    refreshTasksList();
}


