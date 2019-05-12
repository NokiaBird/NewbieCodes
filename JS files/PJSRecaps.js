//PJS RECAPS
//*** V1 ======ARRAYS====== ****//
//============
var todos = [ 'item 1', 'item 2', 'item 3' ];
//To display Todos
//================
console.log('My Todos:', todos);

//To add new Todos
//================
todos.push(todo);

//To change a Todo
//==================
todos[position] = newvalue;

//To delete a Todo
//================
todos.splice(position, 1);

//PJS RECAPS
//*** V2 ======FUNCTIONS====== ****//
//============

//It should have a function to display todos
function displayTodos() {
	console.log('My Todos:', todos);
}

//It should have a function to add  a todo
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

//It should have a function to change todos
function changeTodo(position, newvalue) {
	todos[position] = newValue;
	displayTodos();
}

//It should have a function to delete a todo
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

//PJS RECAPS
//*** V3 ======OBJECTS====== ****//
//============

var todoList = {
	todos: [ 'item 1', 'item 2', 'item 3' ],
	//displayTodos Method
	displayTodos: function() {
		console.log('My Todos:', this.todos);
	},

	//addTodos Method
	addTodo: function(todo) {
		this.todos.push(todo);
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
	}
};

//PJS RECAPS
//*** V4 ======BOOLEANS====== ****//
//============
//addTodo should add objects
var todoList = {
	todos: [],

	//displayTodos Method
	displayTodos: function() {
		console.log('My Todos:', this.todos);
	},
	//addTodo should add objects
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	//changeTodo should change todoText
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

	//tooggleCompleted tells wether todo is completed or not
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

//PJS RECAPS
//*** V5 ======LOOPS OF LOGIC====== ****//
//============
//IN THIS VERSION displayTodos WAS MODIFIED, Please check for the full final code at the bottom of this page
//displayTodos should show .todoText
var todoList = {
	todos: [],
	displayTodos: function() {
		//IF sec
		//=============
		if (this.todos.length === 0) {
			console.log('Your todo list is empty boss');
		} else {
			console.log('My Todos:');
			//FOR loop SEC
			//=============
			for (var i = 0; i < this.todos.length; i++) {
				//Checking if todos are completed
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}

		//Checking if todos are completed
		if (this.todos[i].completed === true) {
			console.log('(x)', this.todos[i].todoText);
		} else {
			console.log('( )', this.todos[i].todoText);
		}
	},

	//toggleAll Method
	//=================
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//Get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		//Case 1: If everything's true, make everything false.
		if (completedTodos === totalTodos) {
			//make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed === false;
			}
		} else {
			//Otherwise make everything true
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed === true;
			}
		}
	}
};
