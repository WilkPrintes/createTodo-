var listElement = document.querySelector("#app ul");
var btnElement = document.querySelector("#app button");
var inputElement = document.querySelector('#app input');
var checkboxInput = document.querySelector("#app ul li input");

var todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodo(){
    listElement.innerHTML = '';
    for (todo of todos){
        var pas = todos.indexOf(todo);
        var todoElement = document.createElement('li');
        var textTodo = document.createTextNode(todo);
        var textLink = document.createTextNode("Excluir");
        var linkElement = document.createElement('a');
        linkElement.setAttribute('onclick', 'deleteTodo('+ pas +')')
        var checkElement = document.createElement('input');
        
        checkElement.setAttribute('type' , 'checkbox');
        checkElement.setAttribute('id' , 'checkbox'+todo+'');
        linkElement.setAttribute('href', '#');

        todoElement.appendChild(checkElement)
        linkElement.appendChild(textLink);  
        todoElement.appendChild(textTodo);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);


    }
}
renderTodo();

function addTodo(){
    textInput = inputElement.value;
    todos.push(textInput)
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos){

    todos.splice(pos, 1)
    renderTodo(); 
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('list_todo', JSON.stringify(todos));   
}

