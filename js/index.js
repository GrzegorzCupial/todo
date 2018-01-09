let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    //todo element
    const todo = document.createElement('div');
    todo.classList.add('todo__element');

    //bar element
    const todoBar = document.createElement('div');
    todoBar.classList.add('todo__element-bar');

    //bar date
    const todoDate = document.createElement('div');
    todoDate.classList.add('todo__element-bar');
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' hour: ' + date.getHours() + ':' + date.getMinutes();
    todoDate.innerText = dateText;

    //delete button
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo__element-delete');
    todoDelete.classList.add('button');
    todoDelete.innerHTML = '<i class="far fa-trash-alt"></i>';

    //put elements into bar element
    todoBar.appendChild(todoDate);
    todoBar.appendChild(todoDelete);

    //text element
    const todoText = document.createElement('div');
    todoText.classList.add('todo__element-text');
    todoText.innerText = text;

    //merge
    todo.appendChild(todoBar);
    todo.appendChild(todoText);

    //put into list
    todoList.append(todo);
}

document.addEventListener('DOMContentLoaded', function () {
    todoList = document.querySelector('#todoList');
    todoForm = document.querySelector('#todoForm');
    todoSearch = document.querySelector('#todoSearch');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });
});