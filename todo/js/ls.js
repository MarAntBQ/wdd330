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
    ShowAllTasks(0);
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
                    TasksDisplayer.innerHTML += '<li class="done" data-key="'+ aTask["id"] +'"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                } else {
                    RemainTasks++;
                    TasksDisplayer.innerHTML += '<li data-key="'+ aTask["id"] +'"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                }
            } else if (kind == 1) {
                p0.classList.remove("selected");
                p1.classList.add("selected");
                p2.classList.remove("selected");
                if (aTask["completed"] == false) {
                    RemainTasks++;
                    TasksDisplayer.innerHTML += '<li data-key="'+ aTask["id"] +'"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                }
            } else {
                p0.classList.remove("selected");
                p1.classList.remove("selected");
                p2.classList.add("selected");
                if (aTask["completed"] == true) {
                    //Change according to your html layout
                    TasksDisplayer.innerHTML += '<li class="done" data-key="'+ aTask["id"] +'"><i class="fas fa-check-square done-btn"></i><i class="fas fa-trash delete-task-btn"></i><span>' + aTask["content"] + '</span></li>';
                } else {
                    RemainTasks++;
                }
            }

        }
        if (toDoList.length == 0) {
            TasksDisplayer.innerHTML = "<h1 class='tac'>No Tasks found!</h1>";
            document.getElementById("tcount").innerHTML = '';
            document.getElementById("tcount").classList.remove("minw100px");
            document.getElementById("tcount").classList.add("minw1px");
            p0.classList.remove("selected");
            p1.classList.remove("selected");
            p2.classList.remove("selected");
        } else {
            document.getElementById("tcount").classList.remove("minw1px");
            document.getElementById("tcount").classList.add("minw100px");
            document.getElementById("tcount").innerHTML = '<strong>'+ RemainTasks +'</strong> tasks left';
        }

    } else {
        TasksDisplayer.innerHTML = "<h1 class='tac'>No Tasks found!</h1>";
    }
}

function toggleDone(key) {
    var storedtoDoStrings = localStorage["toDoList"];   
    var toDoList = JSON.parse(storedtoDoStrings);
    //console.log(toDoList);
    const index = toDoList.findIndex(item => item.id === Number(key));
    //console.log(index);
    if (toDoList[index]["completed"] == false) {
        toDoList[index]["completed"] = true;
    } else {
        toDoList[index]["completed"] = false;
    }
    var alltoDoString = JSON.stringify(toDoList);
    localStorage["toDoList"] = alltoDoString;
    ShowAllTasks(0);
  }

  function DeleteTask(key) {
    var storedtoDoStrings = localStorage["toDoList"];   
    var toDoList = JSON.parse(storedtoDoStrings);
    //console.log(toDoList);
    const index = toDoList.findIndex(item => item.id === Number(key));
    //console.log(index);
    toDoList.splice(index, 1);
    var alltoDoString = JSON.stringify(toDoList);
    localStorage["toDoList"] = alltoDoString;
    ShowAllTasks(0);
  }


export {
    addNewTask,
    ShowAllTasks,
    toggleDone,
    DeleteTask
};