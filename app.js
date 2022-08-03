const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

const addTodo = (e) => {
  e.preventDefault();

  if (todoInput.value) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');

    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(completedButton);
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);

    todoInput.value = '';
  } else {
    alert('Please, enter a todo!');
  }
};

const catchEvent = (e) => {
  const item = e.target;
  const option = item.classList[0];
  const todo = item.parentElement;
  if (option === 'trash-btn') {
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => todo.remove());
  } else if (option === 'complete-btn') {
    todo.classList.toggle('completed');
  }
};

const filterTodos = (e) => {
  const option = e.target.options.selectedIndex;
  todoList.childNodes.forEach((todo) => {
    const isCompleted = todo.classList.contains('completed');
    if (option === 1) {
      isCompleted ? todo.classList.remove('hide') : todo.classList.add('hide');
    } else if (option === 2) {
      isCompleted ? todo.classList.add('hide') : todo.classList.remove('hide');
    } else {
      todo.classList.remove('hide');
    }
  });
};

// Events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', catchEvent);
filterTodo.addEventListener('change', (e) => {
  filterTodos(e);
});
