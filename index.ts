// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
document.getElementById('newTodo').addEventListener('click', newTodo);

class Todo {
  name: string;
  done: boolean;

  constructor(n: string) {
    this.name = n;
  }
}

let todoList: Todo[] = [new Todo('Teszt')];

function listTodo() {
  let allHtml = '';
  todoList.forEach((todo, index) => {
    let htmlContent = `
    <div class="todo">
      <h3>${todo.name}</h3>
      <button class="remove" id="${index}">✓</button>
    </div>`;
    allHtml = htmlContent + allHtml;
  });
  document.getElementById('todos').innerHTML = allHtml;
  let buttons = document.getElementsByClassName('remove');
  Array.prototype.forEach.call(buttons, function(element) {
    element.addEventListener('click', e => handleDelete(e));
  });
}

function newTodo(event) {
  let name = prompt('Todo neve:');
  let todo = new Todo(name);
  todoList.push(todo);
  listTodo();
}

listTodo();

function handleDelete(event: Event) {
  todoList.splice(Number(event.target['id']), 1);
  listTodo();
}
