let todoList = null;
let todoForm = null;

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
    const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    const dateText =  'Added ' + ((date.getDate()<10?'0':'') + date.getDate()) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' / ' + date.getHours() + ':' + ((date.getMinutes()<10?'0':'') + date.getMinutes());  // fixed minutes that returns one number if there is 0 before 0-9
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
    localStorage.setItem('todo', JSON.stringify(todo))
}

document.addEventListener('DOMContentLoaded', function () {
    todoList = document.querySelector('#todoList');
    todoForm = document.querySelector('#todoForm');
    todoSearch = document.querySelector('#todoSearch');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });

    todoList.addEventListener('click', function (e) {
        e.target.closest('.todo__element').remove();
    })
});
