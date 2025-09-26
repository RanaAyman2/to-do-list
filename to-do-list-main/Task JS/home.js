class Todo {
  constructor(task, completed = false) {
    this.id = Date.now();
    this.task = task;
    this.completed = completed;
  }
}

class TodoApp {
  constructor(userEmail) {
    this.userEmail = userEmail;
    this.todos = this.loadTasks();
    this.taskListElement = document.getElementById("taskList");
    this.renderTasks();
  }

  getStorageKey() {
    return `todos_${this.userEmail}`;
  }

  saveTasks() {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(this.todos));
  }

  loadTasks() {
    return JSON.parse(localStorage.getItem(this.getStorageKey())) || [];
  }

  addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (!taskText) return alert("Task cannot be empty!");

    const newTask = new Todo(taskText);
    this.todos.push(newTask);
    this.saveTasks();
    this.renderTasks();
    taskInput.value = "";
  }

  editTask(id) {
    const task = this.todos.find(t => t.id === id);
    const newTask = prompt("Edit task:", task.task);
    if (newTask && newTask.trim() !== "") {
      task.task = newTask.trim();
      this.saveTasks();
      this.renderTasks();
    }
  }

  deleteTask(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveTasks();
    this.renderTasks();
  }

  toggleComplete(id) {
    const task = this.todos.find(t => t.id === id);
    task.completed = !task.completed;
    this.saveTasks();
    this.renderTasks();
  }

  renderTasks() {
    this.taskListElement.innerHTML = "";
    this.todos.forEach(task => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      const span = document.createElement("span");
      span.textContent = task.task;

      const actions = document.createElement("div");
      actions.className = "actions";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit";
      editBtn.onclick = () => this.editTask(task.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.onclick = () => this.deleteTask(task.id);

      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "Undo" : "Done";
      completeBtn.className = "complete";
      completeBtn.onclick = () => this.toggleComplete(task.id);

      actions.append(editBtn, deleteBtn, completeBtn);
      li.append(span, actions);
      this.taskListElement.appendChild(li);
    });
  }
}


const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {

  window.location.href = "index.html";
} else {

  document.getElementById("welcomeUser").textContent =
    `Welcome, ${currentUser.firstName} ${currentUser.lastName}!`;


  window.todoApp = new TodoApp(currentUser.email);
}

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.setItem("showLogin", "true"); // علشان يرجع للوجين
  window.location.href = "index.html";
}
