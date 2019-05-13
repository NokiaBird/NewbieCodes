//HERE IS THE OBJECT RECAPS OF PJS
//================================
var todoList = {
	todos: [],

	//displayTodos Method
	//========================
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo is empty');
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

	//addTodo Method
	//=================
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	//changeTodo Method
	//==================
	changeTodo: function(position, todotext) {
		this.todos[position].todotext = todotext;
		this.displayTodos();
	},

	//deleteTodo function
	//===================
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	//toggleCompletedMethod
	//======================
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},

	//toggleAll Method
	//=================
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//Get number of completed todos.
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		//if everything's true, make everything false.
		if (completedTodos === totalTodos) {
			//make everything false.
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			//Otherwise make everything trueee
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

//From here starts linking our JS scripts to HTML for user interface
//===================================================================

//THIS CODE HAS BEEN REFACTORED FOR EASY READING & UNDERSTANDING

// //1.We want to get access to the display todos button.
// var displayTodosbutton = document.getElementById('displayTodosButton');
// //2.We want to run displayTodos method, when someone clicks the displayTodos button.
// displayTodosbutton.addEventListener('click', function() {
// 	todoList.displayTodos();
// });

// //1.We want to get access to the toggleAll button.
// var toggleAllButton = document.getElementById('toggleAllButton');
// //2.We want to run displayTodos method, when someone clicks the toggleAll button.
// toggleAllButton.addEventListener('click', function() {
// 	todoList.toggleAll();
// });

//HERE IS THE REFACTORED CODE OF THE ABOVE ONE
var handlers = {
	//Here goes the displayTodos button
	displayTodos: function() {
		todoList.displayTodos();
	},
	//Here goes the toggleAll button
	toggleAll: function() {
		todoList.toggleAll();
	},

	//Here goes the addTodo button
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
	}
};
