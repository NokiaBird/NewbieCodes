//PJS RECAPS
var todoList = {
	todos: [],

	//displayTodos Method
	displayTodos: function() {
		console.log('My Todos:');
		//displayTodos should show .todoText
		for (var i = 0; i < this.todos.length; i++) {
			console.log(this.todos[i].todoText);
		}
	},

	//addTodo Method
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	//changeTodo Method
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},

	//deleteTodo Method
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	//toggleCompleted Method
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};
