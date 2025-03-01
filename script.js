const themeBtn = document.getElementById("theme-btn");

//changeTheme function
function changeTheme() {
  const r = Math.floor(Math.random() * 256).toString(16);
  const g = Math.floor(Math.random() * 256).toString(16);
  const b = Math.floor(Math.random() * 256).toString(16);
  return `#${r}${g}${b}`;
}

themeBtn.addEventListener("click", function () {
  const body = document.getElementById("body");
  body.style.backgroundColor = changeTheme();
});

// let completeTaskBtn;

const tasks = document.querySelectorAll(".task");

for (let task of tasks) {
  const completeTaskBtn = task.querySelector(".task #complete-task-btn");
  const taskTitleParent = task.querySelector(".task #task-title");
  const taskTitle = taskTitleParent.innerText;
  const taskHistory = document.getElementById("task-history");
  const addedTask = document.createElement("p");

  completeTaskBtn.addEventListener("click", function () {
    completeTask();

    // disable the completeTask button
    completeTaskBtn.setAttribute("disabled", "true");
    completeTaskBtn.style.backgroundColor = "#DDE4FF";
    completeTaskBtn.style.cursor = "default";

    // Get current time
    const currentDate = new Date(Date.now());
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const currentTime = currentDate.toLocaleTimeString("en-US", options);

    // add task to the history
    addedTask.innerText = `You have completed the task ${taskTitle} at ${currentTime}`;
    addedTask.classList.add("added-task-style");
    taskHistory.appendChild(addedTask);
  });
}
// completeTask function

function completeTask() {
  alert("Board updated successfully");
  // decrease tasks
  let assignedTask = document.getElementById("assigned-task");
  const tasksLeft = parseInt(assignedTask.innerText) - 1;
  console.log(tasksLeft);
  
  if(tasksLeft==0){
    alert("Congrates! You have completed all the current tasks.");
  }

  if (tasksLeft >= 0) {
    assignedTask.innerText = tasksLeft == 0 ? 0 : `0${tasksLeft}`;
  }
  // increase tasks
  let accomplishedTask = document.getElementById("completed-tasks");
  if (tasksLeft >= 0) {
    tasksAccomplished = parseInt(accomplishedTask.innerText) + 1;
    accomplishedTask.innerText = tasksAccomplished;
  }

  //   clear history

  const clearHistoryBtn = document.querySelector("#clear-history-btn");
  // clearTaskHistory function
  function clearTaskHistory() {
    const taskHistory = document.querySelector("#task-history");
    taskHistory.innerHTML = "";
  }
  clearHistoryBtn.addEventListener("click", clearTaskHistory);
}
