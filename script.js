const themeBtn = document.getElementById("theme-btn");

//changeTheme function
function changeTheme() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(changeTheme());

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


// Handle currentDate and dayName

const dayName = document.getElementById("dayName");
const currentDate = document.getElementById("currentDate");

// getDayName function

function getDayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    return days[today.getDay()];
  }
  
dayName.innerText = `${getDayName()} ,`;  

// getCurrentDate function

function getCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return today.toLocaleDateString('en-US', options).replace(',', ''); // Example: "March 02 2025"
  }
  
  currentDate.innerText = getCurrentDate();


//   redirect to the blog page

const discoverSomethingNew = document.getElementById('discover-div');

discoverSomethingNew.addEventListener("click",function(){
    window.location.href = './blog.html';
})