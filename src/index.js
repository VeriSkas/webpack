import './style.scss';

let ul = document.querySelector('ul');
let completed = document.querySelector('.completed');
let notCompleted = document.querySelector('.notCompleted');
let todos;

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => todos = json);
}

const getTodos  = async () => {
    await fetchTodos();
    completed.onclick = () => {
        ul.innerHTML = '';
        todos.forEach(element => {
            if(element.completed) {
                let checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                let span = document.createElement('span');
                let li = document.createElement('li');
                span.innerHTML = element.title;
                ul.append(li);
                li.before(checkbox);
                li.before(span);
                console.log(checkbox.checked);
                checkbox.onclick = function () {
                    if(checkbox.checked) {
                        span.style.backgroundColor = 'red';
                        console.log('check');
                    } else {
                        span.style.backgroundColor = '';
                        console.log('No check');
                    }
                }
            }
        });
    }
    notCompleted.onclick = () => {
        ul.innerHTML = '';
        todos.forEach(element => {
            if(!element.completed) {
                let li = document.createElement('li');
                li.innerHTML = `&#9734 ${element.title}`;
                ul.prepend(li);
                li.onclick = function () {
                    let isClicked = li.getAttribute('clicked');
                    if(!isClicked) {
                        li.setAttribute('clicked', true);
                        li.innerHTML = `&#9733 ${element.title}`;
                        li.style.color = 'yellow';
                    } else {
                        li.removeAttribute('clicked');
                        li.innerHTML = `&#9734 ${element.title}`;
                        li.style.color = 'black';
                    }
                }
            }
        });
    }
}

getTodos();



