// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
if (!Array.isArray(taskList)) {
  taskList = [];
}
let nextId = JSON.parse(localStorage.getItem("nextId"));
if (typeof nextId !== "number") {
  nextId = 1;
}

console.log("Initialized taskList:", taskList);
console.log("Initialized nextId:", nextId);

// Todo: create a function to generate a unique task id
function generateTaskId() {

    return nextId++;

}

// Todo: create a function to create a task card
function createTaskCard(task) {

    const dueDate = dayjs(task.dueDate).format('MMMM D, YYYY');
    return `
      <div class="card mb-2" data-id="${task.id}">
        <div class="card-body">
          <h5 class="card-title">${task.title}</h5>
          <p class="card-text">${task.description}</p>
          <p class="card-text"><small class="text-muted">Due: ${dueDate}</small></p>
          <button class="btn btn-danger btn-sm delete-task">Delete</button>
        </div>
      </div>
    `;    



}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

  const lanes = {
    "to-do": $("#todo-cards"),
    "in-progress": $("#in-progress-cards"),
    "done": $("#done-cards")
  };

  for (let key in lanes) {
    lanes[key].empty();
  }

  taskList.forEach(task => {
    lanes[task.status].append(createTaskCard(task));
  });

  $(".card").draggable({
    revert: "invalid",
    start: function () {
      $(this).css("z-index", 1000);
    },
    stop: function () {
      $(this).css("z-index", "");
    }
  });

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

  event.preventDefault();

  const title = $("#taskTitle").val();
  const description = $("#taskDescription").val();
  const dueDate = $("#taskDueDate").val();

  if (!title || !description || !dueDate) {
    alert("All fields are required!");
    return;
  }

  const newTask = {
    id: generateTaskId(),
    title,
    description,
    dueDate,
    status: "to-do"
  };

  taskList.push(newTask);
  console.log("Task List:", taskList); //Added console log to see why form not working.
  localStorage.setItem("tasks", JSON.stringify(taskList));
  localStorage.setItem("nextId", JSON.stringify(nextId));

  $("#formModal").modal('hide');
  renderTaskList();

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

  const taskId = $(event.target).closest(".card").data("id");
  taskList = taskList.filter(task => task.id !== taskId);

  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();




}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

  const taskId = ui.draggable.data("id");
  const newStatus = $(this).closest('.lane').attr("id").replace("-cards", "");
  const task = taskList.find(task => task.id === taskId);
  task.status = newStatus;

  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();


}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

  renderTaskList();

  $("#taskForm").on("submit", handleAddTask);
  $(document).on("click", ".delete-task", handleDeleteTask);

  $(".lane").droppable({
    accept: ".card",
    drop: handleDrop
  });

  $("#taskDueDate").datepicker();  

});

