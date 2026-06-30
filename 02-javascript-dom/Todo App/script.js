const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const counter = document.getElementById("counter");

let todos = [];

// ------------------------

function saveTodos() {

    localStorage.setItem("todos", JSON.stringify(todos));

}

// ------------------------

function loadTodos() {

    const data = localStorage.getItem("todos");

    if (data) {

        todos = JSON.parse(data);

    }

    renderTodos();

}

// ------------------------

function updateCounter() {

    counter.textContent =
        `Total Tasks : ${todos.length}`;

}

// ------------------------

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = todo.text;

        if (todo.completed) {

            span.classList.add("completed");

        }

        const actions = document.createElement("div");

        actions.className = "actions";

        // Complete Button

        const completeBtn =
            document.createElement("button");

        completeBtn.textContent = "✔";

        completeBtn.className = "complete-btn";

        completeBtn.dataset.action = "complete";

        completeBtn.dataset.index = index;

        // Edit Button

        const editBtn =
            document.createElement("button");

        editBtn.textContent = "Edit";

        editBtn.className = "edit-btn";

        editBtn.dataset.action = "edit";

        editBtn.dataset.index = index;

        // Delete Button

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className = "delete-btn";

        deleteBtn.dataset.action = "delete";

        deleteBtn.dataset.index = index;

        actions.append(
            completeBtn,
            editBtn,
            deleteBtn
        );

        li.append(
            span,
            actions
        );

        todoList.appendChild(li);

    });

    updateCounter();

}

// ------------------------

function addTodo() {

    const task = todoInput.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    todos.push({

        text: task,

        completed: false

    });

    todoInput.value = "";

    saveTodos();

    renderTodos();

}

// ------------------------

addBtn.addEventListener("click", addTodo);

// ------------------------

todoInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        addTodo();

    }

});

// ------------------------

todoList.addEventListener("click", (event) => {

    const action = event.target.dataset.action;

    const index = event.target.dataset.index;

    if (!action) return;

    if (action === "delete") {

        todos.splice(index, 1);

    }

    if (action === "complete") {

        todos[index].completed =
            !todos[index].completed;

    }

    if (action === "edit") {

        const newTask =
            prompt(
                "Edit Task",
                todos[index].text
            );

        if (
            newTask &&
            newTask.trim() !== ""
        ) {

            todos[index].text =
                newTask.trim();

        }

    }

    saveTodos();

    renderTodos();

});

// ------------------------

loadTodos();