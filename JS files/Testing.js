//This is V3  //OBJECTS
var todoList = {
	todos: [],

	//displayTodos method
	displayTodos: function() {
		//Check if todos is empty
		//=======================
		if (this.todos.length === 0) {
			console.log('Your todos are eeemptyyy MY friendaa');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				//Check if todo is completed
				//==========================
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},

	//addTodo method
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	//changeTodo method
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

	//deleteTodo method
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	//toggleCompleted method
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},

	//toggleAll method
	//================
	toggleAll: function() {
		//To get all of the todos
		var totalTodos = this.todos.length;
		//To fetch for completed todos
		var completedTodos = 0;

		//Get number of completed TODOS
		//==============================
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		//Case 1: if everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			//Case 2: Otherwise, make everything true pleaaseee.
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
			this.displayTodos();
		}
	}
};
