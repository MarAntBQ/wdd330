import {addNewTask, ShowAllTasks, toggleDone, DeleteTask} from './ls.js';

//Get item text
document.getElementById("add").addEventListener("click", () => {
    let input = document.getElementById("newItem");
    let newItem = input.value;
    if (newItem == '' || newItem == ' ') {
        alert("Please write a task");
    } else {
        addNewTask(newItem);
        input.value = '';
        input.focus();
    }
});
var input = document.getElementById("newItem");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add").click();
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

const list = document.getElementById("tasksList");
list.addEventListener('click', event => {
    if (event.target.classList.contains('done-btn')) {
      const itemKey = event.target.parentElement.dataset.key;
      //alert("You are checking the id: " + itemKey);
      toggleDone(itemKey);
    }
  
    if (event.target.classList.contains('delete-task-btn')) {
      const itemKey = event.target.parentElement.dataset.key;
      //alert("You are deleting the id: " + itemKey);
      DeleteTask(itemKey);
    }
  });