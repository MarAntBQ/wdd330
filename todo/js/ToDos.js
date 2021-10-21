import {addNewTask, ShowAllTasks} from './ls.js';

//Get item text
document.getElementById("add").addEventListener("click", () => {
    let input = document.getElementById("newItem");
    let newItem = input.value;
    if (newItem !== '') {
        addNewTask(newItem);
        input.value = '';
        input.focus();
    } else {
        alert("Please write a task");
    }
});

window.onload = (event) => {
    ShowAllTasks(0);
};

document.getElementById("p0").addEventListener("click", () => {
    ShowAllTasks(0);
});

document.getElementById("p1").addEventListener("click", () => {
    ShowAllTasks(1);
});

document.getElementById("p2").addEventListener("click", () => {
    ShowAllTasks(2);
});