//HERE IS THE OBJECT RECAPS OF PJS
//================================
var todoList = {
	todos: [ 'item 1 ', 'item 2', 'item 3', 'item 4' ],

	//displayTodos function
	//========================
	displayTodos: function() {
		console.log('My Todos:', this.todos);
	},

	//addTodo function
	//=================
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},

	//changeTodo function
	//==================
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},

	//deleteTodo function
	//===================
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};
