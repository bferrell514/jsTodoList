var todos = ['item 1', 'item 2', 'item 3', 'item 4b']

function displayTodos() {
	console.log('My todos:', todos);
    }
    
function addTodo(todos) {
	todos.push(todos);
	displayTodos()
    }
    
function changeTodo(position, newValue) {
    todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1)
    displayTodos();
}
