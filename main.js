var containerElement = document.querySelector("#app");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector('#app button');

var todos = ['Fazer café', 'Estudar JavaScript', 'Alguma coisa'];

function renderTodos(){
    var todoElement = document.createElement('li');
    var textTodo = document.createTextNode( inputElement.value);

    todoElement.appendChild(textTodo);
    containerElement.appendChild(todoElement);
}

btnElement.onclick = renderTodos;