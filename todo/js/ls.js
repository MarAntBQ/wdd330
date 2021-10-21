//Add new Element Array
function addNewTask(newItem) {
    const todo = {
        "id": Date.now(),
        "content": newItem,
        "completed": false
    };
    saveDataInCache(todo);
}

//Save in Local Memory
function saveDataInCache(todo) {
    var toDoList = null;
    var storedtoDoStrings = localStorage["toDoList"];
    if (storedtoDoStrings == null) {
        toDoList = [];
    } else {
        toDoList = JSON.parse(storedtoDoStrings)
    }
    toDoList.push(todo);
    var alltoDoString = JSON.stringify(toDoList);
    localStorage["toDoList"] = alltoDoString;
    ShowAllTasks();
}

//Show all tasks
function ShowAllTasks(kind) {
    var storedtoDoList = localStorage["toDoList"];
    var TasksDisplayer = document.getElementById("tasksList");
    var p0 = document.getElementById("p0");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    if (storedtoDoList != null) {
        var toDoList = JSON.parse(storedtoDoList);
        TasksDisplayer.innerHTML = null
        var numberOfTasks = toDoList.length
        var RemainTasks = 0;
        for (var i = 0; i < numberOfTasks; i++) {
            var aTask = toDoList[i];
            if (kind == 0) {
                p0.classList.add("selected");
                p1.classList.remove("selected");
                p2.classList.remove("selected");

                if (aTask["completed"] == true) {
                    //Change according to your html layout
                    TasksDisplayer.innerHTML += '<li class="done"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                } else {
                    RemainTasks++;
                    TasksDisplayer.innerHTML += '<li><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                }
            } else if (kind == 1) {
                p0.classList.remove("selected");
                p1.classList.add("selected");
                p2.classList.remove("selected");
                if (aTask["completed"] == false) {
                    TasksDisplayer.innerHTML += '<li><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                }
            } else {
                p0.classList.remove("selected");
                p1.classList.remove("selected");
                p2.classList.add("selected");
                if (aTask["completed"] == true) {
                    //Change according to your html layout
                    TasksDisplayer.innerHTML += '<li class="done"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                }
            }

        }
        
    } else {
        TasksDisplayer.innerHTML = "<h1 class='tac'>No Tasks found!</h1>";
    }
}


export {
    addNewTask,
    ShowAllTasks
};