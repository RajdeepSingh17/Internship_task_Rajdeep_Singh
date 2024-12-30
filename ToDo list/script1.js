    const taskInput = document.getElementById("task-input");
    const searchInput = document.getElementById("search-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const clearTaskButton = document.getElementById("clear-task-btn");
    const taskList = document.getElementById("task-list");

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function (task){
            addTaskToUI(task);
        });
    }

    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.querySelectorAll(".task-text");
        taskItems.forEach(function (taskItem) {
          tasks.push(taskItem.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

    function addTaskToUI (taskText){
        const li= document.createElement("li");
        li.className="task-item";
    
    const span = document.createElement("span");
    span.className="task-text";
    span.textContent= taskText;
    li.appendChild(span);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick= function() {
        li.remove();
        saveTasks();
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    }
    function filterTasks() {
        const query = searchInput.value.toLowerCase();
        const taskItems = taskList.querySelectorAll(".task-item");
        taskItems.forEach(function (taskItem){
            const taskText = taskItem.querySelector(".task-text").textContent.toLowerCase();
            if (taskText.includes(query)){
                taskItem.style.display = "flex";
            } else {
              taskItem.style.display = "none";
            }
          });
        }
function setup(){
    addTaskButton.onclick = function () {
        const taskText = taskInput.value.trim();
        if(taskText){
            addTaskToUI(taskText);
            saveTasks();
            taskInput.value="";
        }
    };
    clearTaskButton.onclick = function (){
        taskList.innerHTML ="";
        saveTasks();
    };
    searchInput.oninput = filterTasks;

  loadTasks(); 
}
setup();