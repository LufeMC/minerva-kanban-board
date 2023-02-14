let toDo = [];
let doing = [];
let done = [];

const addTaskForm = document.getElementById("add-new-task-form");
const addTaskContainer = document.getElementById("add-modal-container");
const newTaskButton = document.getElementById("add-new-task-button");
const toDoColumn = document.getElementById("to-do");
const toDoTasksList = toDoColumn.getElementsByClassName("tasks-list")[0];
const doingColumn = document.getElementById("doing");
const doingTasksList = doingColumn.getElementsByClassName("tasks-list")[0];
const doneColumn = document.getElementById("done");
const doneTasksList = doneColumn.getElementsByClassName("tasks-list")[0];
const taskName = document.getElementById("task-name");
const taskDescription = document.getElementById("task-description");

newTaskButton.addEventListener("click", () => {
  addTaskContainer.classList.add("visible");
});

addTaskForm.addEventListener("click", (event) => {
  event.stopPropagation();
});

addTaskContainer.addEventListener("click", () => {
  hideModal();
});

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!taskName.value || !taskDescription.value) {
    alert("Please add a task description and a task name");
    return;
  }

  addNewTask(taskName.value, taskDescription.value);
});

const hideModal = () => {
  if (addTaskContainer.classList.contains("visible")) {
    addTaskContainer.classList.remove("visible");
  }
};

const addNewTask = (name, description) => {
  const newTask = {
    id: `toDo-${toDo.length + 1}`,
    name,
    description,
  };

  toDo.push(newTask);
  createTaskOnDom("toDo", newTask);
  hideModal();
};

const createTaskOnDom = (column, newTask) => {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  taskContainer.id = newTask.id;

  const taskHeader = document.createElement("div");
  const taskHeaderLeftArrow = document.createElement("img");
  taskHeaderLeftArrow.src = "./assets/arrow-left.svg";
  if (column === "toDo") {
    taskHeaderLeftArrow.classList.add("hidden");
  }

  taskHeaderLeftArrow.id = `previous-${newTask.id}`;

  const taskHeaderActions = document.createElement("div");
  const taskHeaderActionsName = document.createElement("span");
  taskHeaderActionsName.innerText = newTask.name;
  const taskHeaderActionsTrash = document.createElement("img");
  taskHeaderActionsTrash.src = "./assets/trash.svg";
  taskHeaderActionsTrash.addEventListener("click", () => {
    deleteTask(
      column === "toDo" ? toDo : column === "doing" ? doing : done,
      newTask.id
    );
  });
  taskHeaderActionsTrash.id = `trash-${newTask.id}`;
  taskHeaderActions.appendChild(taskHeaderActionsName);
  taskHeaderActions.appendChild(taskHeaderActionsTrash);
  taskHeaderActions.classList.add("actions");

  const taskHeaderRightArrow = document.createElement("img");
  taskHeaderRightArrow.src = "./assets/arrow-right.svg";
  taskHeaderRightArrow.id = `next-${newTask.id}`;
  if (column === "done") {
    taskHeaderRightArrow.classList.add("hidden");
  }

  taskHeaderLeftArrow.addEventListener("click", () => {
    if (!taskHeaderLeftArrow.classList.contains("hidden")) {
      changeToPrevious(
        column === "toDo" ? toDo : column === "doing" ? doing : done,
        newTask.id
      );
    }
  });

  taskHeaderRightArrow.addEventListener("click", () => {
    if (!taskHeaderRightArrow.classList.contains("hidden")) {
      changeToNext(
        column === "toDo" ? toDo : column === "doing" ? doing : done,
        newTask.id
      );
    }
  });

  taskHeader.appendChild(taskHeaderLeftArrow);
  taskHeader.appendChild(taskHeaderActions);
  taskHeader.appendChild(taskHeaderRightArrow);
  taskHeader.classList.add("header");

  const taskDescription = document.createElement("div");
  taskDescription.innerText = newTask.description;
  taskDescription.classList.add("description");
  taskDescription.lang = "en-US";

  taskContainer.appendChild(taskHeader);
  taskContainer.appendChild(taskDescription);

  if (column === "toDo") {
    toDoTasksList.appendChild(taskContainer);
  } else if (column === "doing") {
    doingTasksList.appendChild(taskContainer);
  } else {
    doneTasksList.appendChild(taskContainer);
  }

  taskDescription.value = "";
  taskName.value = "";
};

const changeToNext = (lst, taskId) => {
  const task = lst.filter((task) => task.id === taskId)[0];
  lst = lst.filter((task) => task.id !== taskId);

  if (task.id.split("-")[0] === "toDo") {
    const taskElement = document.getElementById(taskId);
    toDoTasksList.removeChild(taskElement);

    const newTask = {
      ...task,
      id: `doing-${doing.length + 1}`,
    };

    doing.push(newTask);
    createTaskOnDom("doing", newTask);
  } else if (task.id.split("-")[0] === "doing") {
    const taskElement = document.getElementById(taskId);
    doingTasksList.removeChild(taskElement);

    const newTask = {
      ...task,
      id: `done-${done.length + 1}`,
    };

    done.push(newTask);
    createTaskOnDom("done", newTask);
  }
};

const changeToPrevious = (lst, taskId) => {
  const task = lst.filter((task) => task.id === taskId)[0];
  lst = lst.filter((task) => task.id !== taskId);

  if (task.id.split("-")[0] === "done") {
    const taskElement = document.getElementById(taskId);
    doneTasksList.removeChild(taskElement);

    const newTask = {
      ...task,
      id: `doing-${doing.length + 1}`,
    };

    doing.push(newTask);
    createTaskOnDom("doing", newTask);
  } else if (task.id.split("-")[0] === "doing") {
    const taskElement = document.getElementById(taskId);
    doingTasksList.removeChild(taskElement);

    const newTask = {
      ...task,
      id: `toDo-${done.length + 1}`,
    };

    done.push(newTask);
    createTaskOnDom("toDo", newTask);
  }
};

const deleteTask = (lst, taskId) => {
  const task = lst.filter((task) => task.id === taskId)[0];
  lst = lst.filter((task) => task.id !== taskId);
  const taskElement = document.getElementById(taskId);

  if (task.id.split("-")[0] === "toDo") {
    toDoTasksList.removeChild(taskElement);
  } else if (task.id.split("-")[0] === "doing") {
    doingTasksList.removeChild(taskElement);
  } else {
    doneTasksList.removeChild(taskElement);
  }
};
