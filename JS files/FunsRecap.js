//==================================
//HERE IS THE RECAP WINDOW FOR THE PJS LESSONS ON WATCH AND CODE :)

var todos = [ 'item 1', 'item 2', 'item3' ];
//===It should have function to display todos===

function displayTodos() {
	console.log('My Todos:', todos);
}

// It should have a function to add new todos
//========================================
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// It should have a function to change a todo
//=========================================
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

//It should have a function to delete a todo
//=========================================
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
