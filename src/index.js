let todoItems = [];

if (localStorage.getItem("todoListItems")) {
  todoItems = JSON.parse(localStorage.getItem("todoListItems"));
}

const todoList = document.getElementById("todoList");

function addItemToList(id, title) {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" id="${id}" /> <label for="${id}"> ${title} </label>`;

  todoList.appendChild(li);
}

for (let i = 0; i < todoItems.length; i++) {
  addItemToList(todoItems[i].id, todoItems[i].title);
}

todoList.addEventListener("change", (e) => {
  const task = e.target.parentElement.children[1];

  task.style.textDecoration = e.target.checked ? "line-through" : "";
});

const todoInput = document.getElementById("todoInput");

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value !== "") {
    todoItems.push({
      id: todoItems.length + 1,
      title: e.target.value,
    });
    addItemToList(todoItems.length + 1, e.target.value);
    e.target.value = "";

    localStorage.setItem("todoListItems", JSON.stringify(todoItems));
  }
});

// Searching
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const inputText = e.target.value.toLowerCase();

  const tasks = document.querySelectorAll("#todoList li");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].textContent.toLowerCase().includes(inputText)) {
      tasks[i].style.display = "block";
    } else {
      tasks[i].style.display = "none";
    }
  }
});
