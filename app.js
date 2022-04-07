let remove;
let removeArrayElements;
let arrayOfTasks = [];
window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const taskSpace = document.getElementById("task-space");
  const submit = document.getElementById("submit-button");
  const inputTask = document.getElementById("input-task");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskName = inputTask.value.trim();

    if (taskName && !(taskName.length > 140)) {
      if (arrayOfTasks.length < 10) {
        taskContainer = document.createElement("div");
        task = document.createElement("p");
        removeTaskButton = document.createElement("button");
        removeTaskButton.classList.add("remove-button");
        removeTaskButton.innerHTML = "x";
        taskContainer.classList.add("task-container-style");
        task.classList.add("task-style");
        task.textContent = taskName;
        taskSpace.appendChild(taskContainer);
        taskContainer.appendChild(task);
        taskContainer.appendChild(removeTaskButton);
        arrayOfTasks.push(taskContainer);
        console.log(arrayOfTasks);
        remove = document.getElementsByClassName("remove-button");
        removeArrayElements = [...remove];
        console.log([removeArrayElements]);
        inputTask.value = "";
        console.log("before eli");
      }
      
      inputTask.value = "";
    }
    console.log(taskContainer);
  }); //form
  taskSpace.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.classList.contains("remove-button")) 
    {
      e.target.parentElement.remove();
      arrayOfTasks.pop();
    }
  });
}); //window


