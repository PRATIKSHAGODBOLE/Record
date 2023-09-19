const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTableBody = document.getElementById("taskTableBody");
const taskTable = document.getElementById("taskTable");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskName = taskInput.value;
  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  // Check if the table already has a thead element
  let taskhead = taskTable.querySelector("thead");

  if (!taskhead) {
    // If it doesn't, create a new thead element and add the "S.No" and "Name" headers
    taskhead = document.createElement("thead");
    taskTable.appendChild(taskhead);

    const taskHeadRow = document.createElement("tr");
    taskhead.appendChild(taskHeadRow);

    const taskNumhead = document.createElement("th")
    taskNumhead.textContent = "S.No";
    taskHeadRow.appendChild(taskNumhead);

    const taskNamehead = document.createElement("th");
    taskNamehead.textContent = "Name";
    taskHeadRow.appendChild(taskNamehead);

  }

  // Create a new row element for the task  (tr always use before th and td)
  const taskRow = document.createElement("tr");
  taskTableBody.appendChild(taskRow);

  // Create a cell for the task number (row create)
  const taskNumCell = document.createElement("td");
  taskNumCell.textContent = taskTableBody.children.length;
  taskRow.appendChild(taskNumCell);

  // Create a cell for the task name (row create)
  const taskNameCell = document.createElement("td");
  taskNameCell.textContent = taskName;   //taskName == 09 row defined
  taskRow.appendChild(taskNameCell);




  // Clear the input field
  taskInput.value = '';                                       
}
